// users.js - User Management System for KODBİL Quiz Application

// Structure to store users
let users = JSON.parse(localStorage.getItem('kodbil_users')) || [];

// Function to register a new user
function registerUser(firstName, lastName, email, username, password) {
    // Check if user with this email or username already exists
    if (users.some(user => user.email === email)) {
        return { success: false, message: 'Bu e-posta adresi zaten kullanılıyor.' };
    }

    if (users.some(user => user.username === username)) {
        return { success: false, message: 'Bu kullanıcı adı zaten alınmış.' };
    }

    // Create new user object
    const newUser = {
        id: Date.now().toString(), // Simple ID generation
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username,
        password: password, // In a real app, this should be hashed!
        dateJoined: new Date().toISOString(),
        quizScores: {
            kolay: [],
            orta: [],
            zor: []
        },
        totalScore: 0
    };

    // Add the user to our array
    users.push(newUser);

    // Update local storage
    localStorage.setItem('kodbil_users', JSON.stringify(users));

    return { success: true, message: 'Kayıt başarılı!', user: { ...newUser, password: undefined } };
}

// Function to authenticate a user
function loginUser(email, password) {
    // Find the user with the matching email
    const user = users.find(user => user.email === email);

    // Check if user exists and password matches
    if (!user) {
        return { success: false, message: 'Bu e-posta adresiyle kayıtlı bir kullanıcı bulunamadı.' };
    }

    if (user.password !== password) {
        return { success: false, message: 'Hatalı şifre.' };
    }

    // Create session
    const session = {
        userId: user.id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        loginTime: new Date().toISOString()
    };

    // Store session in localStorage
    localStorage.setItem('kodbil_current_user', JSON.stringify(session));

    return {
        success: true,
        message: 'Giriş başarılı!',
        user: { ...user, password: undefined }
    };
}

// Function to check if user is logged in
function isLoggedIn() {
    return localStorage.getItem('kodbil_current_user') !== null;
}

// Function to get current user info
function getCurrentUser() {
    const userData = localStorage.getItem('kodbil_current_user');
    if (!userData) {
        return null;
    }
    return JSON.parse(userData);
}

// Function to logout
function logoutUser() {
    localStorage.removeItem('kodbil_current_user');
    return { success: true, message: 'Çıkış yapıldı.' };
}

// Function to update user score after a quiz
function updateUserScore(userId, difficultyLevel, score) {
    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex === -1) {
        return { success: false, message: 'Kullanıcı bulunamadı.' };
    }

    // Add new score to the appropriate difficulty level
    users[userIndex].quizScores[difficultyLevel].push({
        score: score,
        date: new Date().toISOString()
    });

    // Update total score - we could use a weighted scoring system
    // Kolay: x1, Orta: x2, Zor: x3
    const weightMultiplier = {
        'kolay': 1,
        'orta': 2,
        'zor': 3
    };

    // Calculate new total score
    users[userIndex].totalScore += score * weightMultiplier[difficultyLevel];

    // Update localStorage
    localStorage.setItem('kodbil_users', JSON.stringify(users));

    return {
        success: true,
        message: 'Skor güncellendi.',
        newTotalScore: users[userIndex].totalScore
    };
}

// Function to get leaderboard
function getLeaderboard(limit = 10, difficultyLevel = null) {
    // Prepare a copy of users for sorting
    let sortedUsers = [...users];

    if (difficultyLevel && difficultyLevel !== 'all') {
        // If filtering by difficulty, only consider scores from that difficulty level
        sortedUsers = sortedUsers.map(user => {
            // Create a copy of the user with only scores from the specified difficulty
            const filteredUser = { ...user };

            // Calculate a score based only on the specified difficulty level
            const weightMultiplier = {
                'kolay': 1,
                'orta': 2,
                'zor': 3
            };

            // Calculate score just for this difficulty level
            if (difficultyLevel in user.quizScores) {
                const difficultyScores = user.quizScores[difficultyLevel];
                filteredUser.totalScore = difficultyScores.reduce((sum, scoreObj) =>
                    sum + (scoreObj.score * weightMultiplier[difficultyLevel]), 0);
            } else {
                filteredUser.totalScore = 0;
            }

            return filteredUser;
        });
    }

    // Sort users by totalScore in descending order
    sortedUsers.sort((a, b) => b.totalScore - a.totalScore);

    // Limit the number of results
    sortedUsers = sortedUsers.slice(0, limit);

    // Format the results for display
    return sortedUsers.map(user => ({
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        totalScore: user.totalScore,
        quizScores: user.quizScores
    }));
}

// Make functions available globally
window.registerUser = registerUser;
window.loginUser = loginUser;
window.isLoggedIn = isLoggedIn;
window.getCurrentUser = getCurrentUser;
window.logoutUser = logoutUser;
window.updateUserScore = updateUserScore;
window.getLeaderboard = getLeaderboard;
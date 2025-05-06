// auth-nav.js - Updates the navigation based on authentication status

document.addEventListener('DOMContentLoaded', function() {
    // Get the navigation buttons container
    const navButtons = document.querySelector('.nav-buttons');
    
    // Check if user is logged in
    if (isLoggedIn()) {
        // Get current user data
        const currentUser = getCurrentUser();
        
        // Replace login/register buttons with profile menu
        navButtons.innerHTML = `
            <a href="siralama.html" class="btn btn-outline" id="leaderboardBtn">Sıralama Tablosu</a>
            <div class="profile-menu">
                <button class="profile-button">
                    <i class="fas fa-user"></i>
                    <span class="user-name">${currentUser.firstName}</span>
                    <i class="fas fa-chevron-down"></i>
                </button>
                <div class="profile-menu-content">
                    <div class="profile-menu-item">
                        <strong>${currentUser.firstName} ${currentUser.lastName}</strong>
                        <div style="font-size: 0.9em; opacity: 0.8;">${currentUser.email}</div>
                    </div>
                    <div class="profile-menu-divider"></div>
                    <a href="profil.html" class="profile-menu-item">
                        <i class="fas fa-user-circle"></i> Profilim
                    </a>
                    <a href="sonuclarim.html" class="profile-menu-item">
                        <i class="fas fa-chart-bar"></i> Sonuçlarım
                    </a>
                    <div class="profile-menu-divider"></div>
                    <a href="#" class="profile-menu-item logout-button" id="logoutBtn">
                        <i class="fas fa-sign-out-alt"></i> Çıkış Yap
                    </a>
                </div>
            </div>
        `;
        
        // Add event listeners for profile menu
        const profileButton = document.querySelector('.profile-button');
        const profileMenuContent = document.querySelector('.profile-menu-content');
        
        profileButton.addEventListener('click', function() {
            profileMenuContent.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.profile-menu')) {
                profileMenuContent.classList.remove('active');
            }
        });
        
        // Add logout functionality
        document.getElementById('logoutBtn').addEventListener('click', function(event) {
            event.preventDefault();
            
            const result = logoutUser();
            
            if (result.success) {
                // Redirect to home page
                window.location.href = 'Arayuz.html';
            }
        });
    }
});
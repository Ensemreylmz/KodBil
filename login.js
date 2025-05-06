// login.js - Login form handling for KODBİL

document.addEventListener('DOMContentLoaded', function() {
    console.log("Login.js dosyası yüklendi!");
    
    const loginForm = document.getElementById('loginForm');
    
    // Check if user is already logged in
    if (isLoggedIn()) {
        console.log("Kullanıcı zaten giriş yapmış!");
        // Redirect to test page
        window.location.href = 'test.html';
        return;
    }
    
    if (loginForm) {
        console.log("Login formu bulundu ve event listener ekleniyor...");
        
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log("Form gönderildi!");
            
            // Get form values
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const remember = document.querySelector('input[name="remember"]')?.checked || false;
            
            console.log("Giriş denemesi: " + email);
            
            // Attempt login
            const result = loginUser(email, password);
            console.log("Giriş sonucu:", result);
            
            if (result.success) {
                showMessage(result.message, 'success');
                
                // Redirect to test page
                setTimeout(() => {
                    window.location.href = 'test.html';
                }, 1000);
            } else {
                showMessage(result.message, 'error');
            }
        });
    } else {
        console.error("Login formu bulunamadı!");
    }
    
    // Function to show messages to the user
    function showMessage(message, type) {
        console.log(`Mesaj gösteriliyor: ${message} (${type})`);
        
        // Check if message container already exists
        let messageContainer = document.querySelector('.message-container');
        
        // If not, create one
        if (!messageContainer) {
            messageContainer = document.createElement('div');
            messageContainer.className = 'message-container';
            const loginContainer = document.querySelector('.login-container');
            if (loginContainer) {
                loginContainer.insertAdjacentElement('afterbegin', messageContainer);
            } else {
                loginForm.insertAdjacentElement('beforebegin', messageContainer);
            }
        }
        
        // Create message element
        const messageElement = document.createElement('div');
        messageElement.className = `message ${type}`;
        messageElement.textContent = message;
        
        // Add to container
        messageContainer.innerHTML = '';
        messageContainer.appendChild(messageElement);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            messageElement.remove();
        }, 5000);
    }
});
// register.js - Registration form handling for KODBİL

console.log("register.js başarıyla yüklendi!");

document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.querySelector('form');
    
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form values
        const firstName = document.getElementById('first-name').value.trim();
        const lastName = document.getElementById('last-name').value.trim();
        const email = document.getElementById('email').value.trim();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        
        // Basic validation
        if (password !== confirmPassword) {
            showMessage('Şifreler eşleşmiyor.', 'error');
            return;
        }
        
        if (password.length < 6) {
            showMessage('Şifre en az 6 karakter olmalıdır.', 'error');
            return;
        }
        
        // Register user
        const result = registerUser(firstName, lastName, email, username, password);
        
        if (result.success) {
            showMessage(result.message, 'success');
            
            // Redirect to login page after successful registration
            setTimeout(() => {
                window.location.href = 'Giris.html';
            }, 1500);
        } else {
            showMessage(result.message, 'error');
        }
    });
    
    // Function to show messages to the user
    function showMessage(message, type) {
        // Check if message container already exists
        let messageContainer = document.querySelector('.message-container');
        
        // If not, create one
        if (!messageContainer) {
            messageContainer = document.createElement('div');
            messageContainer.className = 'message-container';
            registerForm.insertAdjacentElement('beforebegin', messageContainer);
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
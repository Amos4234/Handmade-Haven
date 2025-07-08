// Check if user is logged in
function checkAuth() {
    const user = JSON.parse(localStorage.getItem('user'));
    const loginLink = document.getElementById('login-link');
    
    if (user) {
        loginLink.textContent = 'Logout';
        loginLink.href = '#';
        loginLink.addEventListener('click', logout);
    } else {
        loginLink.textContent = 'Login';
        loginLink.href = 'login.html';
        loginLink.removeEventListener('click', logout);
    }
}

// Login function
if (document.getElementById('login-form')) {
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const errorElement = document.getElementById('login-error');
        
        // Simple validation
        if (!email || !password) {
            errorElement.textContent = 'Please fill in all fields';
            return;
        }
        
        // Check if user exists in local storage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            // Save user to local storage
            localStorage.setItem('user', JSON.stringify(user));
            
            // Redirect to home page
            window.location.href = 'index.html';
        } else {
            errorElement.textContent = 'Invalid email or password';
        }
    });
}

// Signup function
if (document.getElementById('signup-form')) {
    document.getElementById('signup-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm').value;
        const errorElement = document.getElementById('signup-error');
        
        // Validation
        if (!name || !email || !password || !confirmPassword) {
            errorElement.textContent = 'Please fill in all fields';
            return;
        }
        
        if (password !== confirmPassword) {
            errorElement.textContent = 'Passwords do not match';
            return;
        }
        
        if (password.length < 6) {
            errorElement.textContent = 'Password must be at least 6 characters';
            return;
        }
        
        // Check if user already exists
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(u => u.email === email);
        
        if (userExists) {
            errorElement.textContent = 'Email already registered';
            return;
        }
        
        // Create new user
        const newUser = {
            id: Date.now(),
            name,
            email,
            password
        };
        
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('user', JSON.stringify(newUser));
        
        // Redirect to home page
        window.location.href = 'index.html';
    });
}

// Logout function
function logout() {
    localStorage.removeItem('user');
    window.location.href = 'index.html';
}

// Check auth status on page load
document.addEventListener('DOMContentLoaded', checkAuth);
const passwordInput = document.getElementById("password1");
  
passwordInput.addEventListener("input", function () {
  const val = passwordInput.value;

  // Rules
  document.getElementById("length").classList.toggle("valid", val.length >= 6);
  document.getElementById("uppercase").classList.toggle("valid", /[A-Z]/.test(val));
  document.getElementById("number").classList.toggle("valid", /[0-9]/.test(val));
  document.getElementById("special").classList.toggle("valid", /[~!@#$%^&*(),.?]/.test(val));
});

/*// Check if user is already logged in
document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user && window.location.pathname.endsWith('index.html')) {
        window.location.href = 'dashboard.html';
    }
});

// Login functionality
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Get all users from localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Find user with matching email
        const user = users.find(u => u.email === email);
        
        if (!user) {
            alert('User not found. Please sign up.');
            return;
        }
        
        if (user.password !== password) {
            alert('Incorrect password');
            return;
        }
        
        // Set current user in localStorage
        localStorage.setItem('currentUser', JSON.stringify(user));
        
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
    });
}

/ Signup functionality
const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm').value;
        
        // Validate passwords match
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        
        // Get all users from localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Check if user already exists
        if (users.some(u => u.email === email)) {
            alert('User already exists. Please login.');
            return;
        }
        
        // Create new user object
        const newUser = {
            id: Date.now().toString(),
            name,
            email,
            password, // Note: In production, you would hash this
            habits: [],
            streaks: 0,
            createdAt: new Date().toISOString()
        };
        
        // Add new user to users array
        users.push(newUser);
        
        // Save users back to localStorage
        localStorage.setItem('users', JSON.stringify(users));
        
        // Set current user and redirect to setup
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        window.location.href = 'setup.html';
    });
}

// Logout functionality (used in settings.js)
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html'; 
}


document.addEventListener("DOMContentLoaded", function() {
  // Open and close modal functions
  function openModal() {
      document.getElementById('addHabitModal').style.display = 'block';  // Show the modal
  }

  function closeModal() {
      document.getElementById('addHabitModal').style.display = 'none';   // Hide the modal
  }

  // Add event listener to the open modal button
  const openModalBtn = document.querySelector('.add-habit-button');
  if (openModalBtn) {
      openModalBtn.addEventListener('click', openModal);
  }

  // Add event listener to the close modal button
  const closeModalBtn = document.getElementById('closeModalBtn');
  if (closeModalBtn) {
      closeModalBtn.addEventListener('click', closeModal);
  }
});

*/

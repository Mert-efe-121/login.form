document.addEventListener('DOMContentLoaded', (event) => {
    const rememberMeCheckbox = document.getElementById('remember-me');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginForm = document.getElementById('login-form');

    // Check if username and password are stored in localStorage
    if (localStorage.getItem('rememberMe') === 'true') {
        usernameInput.value = localStorage.getItem('username');
        passwordInput.value = localStorage.getItem('password');
        rememberMeCheckbox.checked = true;
    }

    // Save username and password to localStorage if "Remember Me" is checked
    loginForm.addEventListener('submit', () => {
        if (rememberMeCheckbox.checked) {
            localStorage.setItem('username', usernameInput.value);
            localStorage.setItem('password', passwordInput.value);
            localStorage.setItem('rememberMe', 'true');
        } else {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
            localStorage.setItem('rememberMe', 'false');
        }
    });
});
document.getElementById('btn-submit').addEventListener('click', function () {
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // verify email and password
    if (email === 'jerin@gmail.com' && password === 'jerin') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Please provide valid information');
    }
});
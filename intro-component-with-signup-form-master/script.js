document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('trial-form');
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const emailField = document.getElementById('email-id');
    const password = document.getElementById('password');

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission for validation

        let hasError = false;

        // Reset previous error messages and icons
        document.querySelectorAll('.error-message').forEach(error => error.style.visibility = 'hidden');
        document.querySelectorAll('.error-icon').forEach(icon => icon.style.visibility = 'hidden');
        document.querySelectorAll('.form-field').forEach(field => field.classList.remove('error-field'));

        // First Name validation
        if (firstName.value.trim() === '') {
            showError(firstName, 'First name cannot be empty');
            hasError = true;
        }

        // Last Name validation
        if (lastName.value.trim() === '') {
            showError(lastName, 'Last name cannot be empty');
            hasError = true;
        }

        // Email validation
        if (!emailPattern.test(emailField.value.trim())) {
            showError(emailField, 'Please enter a valid email address');
            hasError = true;
        }

        // Password validation
        if (password.value.trim().length < 8) {
            showError(password, 'Password must be at least 8 characters long');
            hasError = true;
        }

        if (!hasError) {
            // Form can be submitted if there are no errors
            alert('Form submitted successfully!');
            form.submit(); // Optionally submit the form
        }
    });

    function showError(inputElement, message) {
        const errorMessageElement = inputElement.parentElement.querySelector('.error-message');
        const errorIconElement = inputElement.parentElement.querySelector('.error-icon');

        errorMessageElement.textContent = message;
        errorMessageElement.style.visibility = 'visible';
        errorIconElement.style.visibility = 'visible';
        inputElement.style.border =  '1px solid red';
    }
});

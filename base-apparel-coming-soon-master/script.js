document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const emailInput = document.getElementById('email-subscription');
    const errorNoEmail = document.getElementById('error-message-noemail');
    const errorInvalidEmail = document.getElementById('error-message-invalid');
    const errorIcon = document.querySelector('.error-icon');

    emailInput.classList.remove('error-border');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener('submit', function(event) {
        let hasError = false;
        const emailValue = emailInput.value.trim();

        // Check for empty email
        if (!emailValue) {
            event.preventDefault();
            errorNoEmail.classList.remove('visually-hidden-1');
            emailInput.classList.add('error-border');
            errorIcon.style.visibility = 'visible';
            hasError = true;
        } else {
            errorNoEmail.classList.add('visually-hidden-1');
            emailInput.classList.remove('error-border');
            errorIcon.style.visibility = 'hidden';
        }

        // Check for invalid email
        if (emailValue && !emailRegex.test(emailValue)) {
            event.preventDefault();
            errorInvalidEmail.classList.remove('visually-hidden-2');
            emailInput.classList.add('error-border');
            errorIcon.style.visibility = 'visible';
            hasError = true;
        } else {
            errorInvalidEmail.classList.add('visually-hidden-2');
            if (!hasError) {
                emailInput.classList.remove('error-border');
                errorIcon.style.visibility = 'hidden';
            }
        }

        // Prevent form submission if there are any errors
        if (hasError) {
            event.preventDefault();
        }
    });
});

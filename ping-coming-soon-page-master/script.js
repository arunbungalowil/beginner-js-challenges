document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('signup-form');
    const emailInput = document.getElementById('signup-email');
    const error = document.getElementById('error');

    emailInput.classList.remove('border-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener('submit', function(event){
        let hasError = false;
        const emailValue = emailInput.value.trim();

        if (!emailValue) {
            emailInput.classList.add('border-error');
            error.textContent = "Whoops! It looks like you forgot to add your email";
            error.style.visibility = 'visible';
            hasError = true;
        } else if (!emailRegex.test(emailValue)) {
            emailInput.classList.add('border-error');
            error.textContent = "Please provide a valid email address";
            error.style.visibility = 'visible';
            hasError = true;
        }

        if (hasError) {
            event.preventDefault();
        } else {
            emailInput.classList.remove('border-error');
            error.textContent = "";
            error.style.visibility = 'hidden';
        }
    });

});
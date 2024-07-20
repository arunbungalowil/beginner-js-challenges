document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('form');
    const emailInput = document.getElementById('email-field')
    const error = document.getElementById('error-message');

    emailInput.classList.remove('error-state')
    form.addEventListener('submit', function(event){
        let emailValue = emailInput.value.trim();
        let hasError = false;
        const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailValue){
            event.preventDefault();
            emailInput.classList.add('error-state');
            error.textContent = 'email required';
            error.style.visibility = 'visible'
            hasError = true;
        }else if(emailValue && !emailregex.test(emailValue)){
            event.preventDefault();
            emailInput.classList.add('error-state');
            error.textContent = 'valid email required';
            error.style.visibility = 'visible'
            hasError = true;
        }

        if (!hasError) {
            emailInput.classList.remove('error-state');
            error.style.visibility = 'hidden';
            const redirectUrl = 'success.html?email=' + encodeURIComponent(emailValue);
            window.location.href = redirectUrl;
        }
    });

});
document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('contact-form')
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const emailID = document.getElementById('email-address');
    const message = document.getElementById('message');
    const consent = document.getElementById('checkbox-consent');
    const submitButton = document.getElementById('btn');
    const errorMessages =document.getElementsByClassName('error-message');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');

    let queryType = null; 

    // function to get the value of radio 

    function updateQueryType(){
        const radios = document.getElementsByName('queryType');
        for(const radio of radios){
            if(radio.checked){
                queryType = radio.value;
                break;
            }
        }
    }

    function showErrorMessage(elementName,position, message, errorValue){
        elementName.style.border ='solid 1px red';
        errorMessages[position].textContent = message;
        errorMessages[position].style.visibility = 'visible';
        hasError = errorValue;
    }

    function clearAllErrors(){
        for (const error of errorMessages) {
            console.log(error);
            error.textContent = '';
            error.style.visibility = 'hidden';
        }
        const inputs = [firstName, lastName, emailID, message];
        for (const input of inputs) {
            input.style.border = 'solid 1px var(--clr-neutral-grey-500)'; 
        }

    }
    function showPopup(){
        popup.style.visibility = 'visible';
    }
    function hidePopup(){
        popup.style.visibility = 'hidden';
    }

    form.addEventListener('submit', function(event){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let hasError = false;
        event.preventDefault();
        clearAllErrors();
       
        if(!firstName.value){
            showErrorMessage(firstName,0,'This field is required',true);

        }
        if(!lastName.value){
            showErrorMessage(lastName,1,'This field is required',true);
        }
        if(!emailID.value){
            showErrorMessage(emailID,2,'This field is required',true);

        }else if(!emailRegex.test(emailID.value)){
            showErrorMessage(emailID,2,'Please enter a valid email address',true);
        }
        updateQueryType();
        if(!queryType){
            errorMessages[3].textContent = 'This field is required';
            errorMessages[3].style.visibility = 'visible';
            hasError = true;
        }
        if(!message.value){
            showErrorMessage(message,4,'This field is required',true);
        }
     
        if(!consent.checked){
            showErrorMessage(consent,5,'To submit this form please consent to being contacted',true);
            hasError = true;
        }

        if(!hasError){
            showPopup();
            form.reset();
        }
    });
    closePopup.addEventListener('click', hidePopup)
    
});
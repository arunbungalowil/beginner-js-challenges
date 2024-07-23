document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('rating-form');
    const buttons = document.querySelectorAll('.btn');
    let selectedRating = null;

    buttons.forEach(button => {
        button.addEventListener('click', function(){
            selectedRating = this.value;
            console.log(selectedRating)
        });  
    })

    form.addEventListener('submit', function(event){
        event.preventDefault();
        if(selectedRating === null){
            event.preventDefault();
            alert('select a rating')
        }else{
            let redirectURL = 'thankyou.html?rating='+selectedRating;
            console.log(redirectURL)
            window.location.href = redirectURL;
        }
        
    });

});
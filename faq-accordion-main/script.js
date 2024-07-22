document.addEventListener('DOMContentLoaded', function(){
    
    const faqContainer = document.querySelectorAll('.faq-container');
    console.log(faqContainer);
    faqContainer.forEach(container => {
        const plus = container.querySelector('.icon-toggle-plus');
        const minus = container.querySelector('.icon-toggle-minus');
        const answer = container.querySelector('.answer-part');

        console.log(plus)
        plus.addEventListener('click', function(){
            plus.classList.add('hide');
            minus.classList.remove('hide')
            answer.classList.remove('hide');

        });
        minus.addEventListener('click', function(){
            plus.classList.remove('hide');
            minus.classList.add('hide')
            answer.classList.add('hide');
        });
    })

});
document.addEventListener('DOMContentLoaded', function(){
    const billAmount = document.getElementById('bill-amount');
    const numberOfPeople = document.getElementById('people');
    const tipAmountPerPerson = document.getElementById('tip-amount-per-person');
    const totalTipPerPerson = document.getElementById('total-tip-per-person');
    const errorMessage = document.querySelector('.error-message');
    const resetButton = document.getElementById('reset-button');
    const percentageButtons = document.querySelectorAll('.bill-tip');
    const customTip = document.getElementById('bill-tip-6'); 

    tipAmountPerPerson.textContent = '0.00';
    totalTipPerPerson.textContent = '0.00';

    let amount = 0;
    let totalPerson = 0;
    let tipPercentage = 0;

    function calculateTipAmount(){
        if(amount > 0 && totalPerson > 0 && tipPercentage >= 0){
            const totalTip = amount * (tipPercentage / 100);
            const perPersonTipAmount = totalTip / totalPerson;
            totalTipPerPerson.textContent = totalTip.toFixed(2);
            tipAmountPerPerson.textContent = perPersonTipAmount.toFixed(2);
        }  
    } 

    function validNumberOfPerson(){
        if(totalPerson === 0 || isNaN(totalPerson)){
            errorMessage.style.visibility = 'visible';
            numberOfPeople.style.border = 'solid 1px red';
        }else{
            errorMessage.style.visibility = 'hidden';
            numberOfPeople.style.border = 'none';
        }
    }

    billAmount.addEventListener('input', function(){
        amount = parseFloat(billAmount.value);
    });

    numberOfPeople.addEventListener('input', function(){
        totalPerson = parseInt(numberOfPeople.value);
        validNumberOfPerson();
        calculateTipAmount();
    });

   percentageButtons.forEach(button=>{
        button.addEventListener('click', function(){
            tipPercentage = parseInt(button.value);
            validNumberOfPerson();
            calculateTipAmount();
        });
   });
   customTip.addEventListener('input', function(){
        tipPercentage = parseFloat(customTip.value);
        validNumberOfPerson();
        calculateTipAmount();
   });

   resetButton.addEventListener('click', function(){
        billAmount.value = '';
        numberOfPeople.value = '';
        customTip.value = '';
        tipAmountPerPerson.textContent = '0.00';
        totalTipPerPerson.textContent = '0.00';
        errorMessage.style.visibility = 'hidden';
        numberOfPeople.style.border = 'none';
        amount = 0;
        totalPerson = 0;
        tipPercentage = 0;
   });

});

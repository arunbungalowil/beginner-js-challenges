document.addEventListener('DOMContentLoaded', function(){
    const billAmount = document.getElementById('bill-amount');
    const numberOfPeople = document.getElementById('people');
    const tipAmountPerPerson = document.getElementById('tip-amount-per-person');
    const totalTipPerPerson = document.getElementById('total-tip-per-person');
    const errorMessage = document.querySelector('.error-message');
    const resetButton = document.getElementById('reset-button');
    const percentageButtons = document.querySelectorAll('.bill-tip');
    const customTip = document.getElementById('bill-tip-6'); 

    let amount = 0;
    let totalPerson = 0;
    let tipPercentage = 0;

    function calculateTipAmount() {
        if (amount > 0 && totalPerson > 0 && tipPercentage >= 0) {
            const yourTotalTipAmount = (amount * tipPercentage) / 100;
            const perPersonCalculation = yourTotalTipAmount / totalPerson;
            tipAmountPerPerson.textContent = yourTotalTipAmount.toFixed(2);
            totalTipPerPerson.textContent = perPersonCalculation.toFixed(2);
        }
    }

    function validateInputs() {
        if (totalPerson === 0 || isNaN(totalPerson)) {
            numberOfPeople.style.border = 'solid 1px red';
            errorMessage.style.visibility = 'visible';
        } else {
            numberOfPeople.style.border = 'none';
            errorMessage.style.visibility = 'hidden';
        }
    }

    billAmount.addEventListener('input', function(){
        amount = parseFloat(billAmount.value);
        calculateTipAmount();
    });

    numberOfPeople.addEventListener('input', function(){
        totalPerson = parseInt(numberOfPeople.value);
        validateInputs();
        calculateTipAmount();
    });

    percentageButtons.forEach(button => {
        button.addEventListener('click', function(){
            tipPercentage = parseFloat(button.value);
            validateInputs();
            calculateTipAmount();
        });
    });

    customTip.addEventListener('input', function(){
        tipPercentage = parseFloat(customTip.value);
        validateInputs();
        calculateTipAmount();
    });

    resetButton.addEventListener('click', function(){
        billAmount.value = '';
        numberOfPeople.value = '';
        customTip.value = '';
        tipAmountPerPerson.textContent = '0.00';
        totalTipPerPerson.textContent = '0.00';
        numberOfPeople.style.border = 'none';
        errorMessage.style.visibility = 'hidden';
        amount = 0;
        totalPerson = 0;
        tipPercentage = 0;
    });
});

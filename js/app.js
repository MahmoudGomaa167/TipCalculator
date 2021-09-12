// Variables
const billInput = document.querySelector('.bill');
const customTipInput = document.querySelector('.custom-tip-input');
const peopleInput = document.querySelector('.people');
const amountResult = document.querySelector('.amount-result');
const totalResult = document.querySelector('.total-result');
const resetBtn = document.querySelector('.reset-btn');
const button5 = document.querySelector('.button5');
const button10 = document.querySelector('.button10');
const button15 = document.querySelector('.button15');
const button25 = document.querySelector('.button25');
const button50 = document.querySelector('.button50');
const errorMessage = document.querySelector('.error');


// Functions
const addStyle = function() {
        errorMessage.style.opacity = '1';
        errorMessage.style.visibility = 'visible'
        peopleInput.style.borderColor = 'red';
}

const removeStyle = function() {
        errorMessage.style.opacity = '0';
        errorMessage.style.visibility = 'hidden'
        peopleInput.style.borderColor = 'transparent';
}

const calcAmount = function (value) {
    if(peopleInput.value !== ''){
        removeStyle();
        let total = +billInput.value * (+value + 1);
        let tipAmount = (total - (+billInput.value)) / (+peopleInput.value);
        let totalAmount = ((+billInput.value) / (+peopleInput.value)) + tipAmount;
        amountResult.innerHTML = `&dollar;${tipAmount.toFixed(2)}`;
        totalResult.innerHTML = `&dollar;${totalAmount.toFixed(2)}`;
    }else{
       addStyle();
    } 
}

const reset = function () {
    amountResult.innerHTML = `&dollar;0.00`;
    totalResult.innerHTML = `&dollar;0.00`;
    customTipInput.value = '';
    billInput.value = '';
    peopleInput.value = '';
    removeStyle();
}


// Events
button5.addEventListener('click', (e) => {
    e.preventDefault();
    calcAmount(button5.value);
     
});

button10.addEventListener('click', (e) => {
    e.preventDefault();
    calcAmount(button10.value);
});

button15.addEventListener('click', (e) => {
    e.preventDefault();
    calcAmount(button15.value);  
});

button25.addEventListener('click', (e) => {
    e.preventDefault();
    calcAmount(button25.value);
});

button50.addEventListener('click', (e) => {
    e.preventDefault();
    calcAmount(button50.value)
});

customTipInput.addEventListener('keyup', function() {
    removeStyle();
    calcAmount(customTipInput.value / 100)  
});

resetBtn.addEventListener('click', function () {
    reset();
});
// 1) Define variables

const displayPreviousValue = document.getElementById('previous-value');
const displayCurrentValue = document.getElementById('current-value');
const buttonsNumber = document.querySelectorAll('.number');
const buttonsOperator = document.querySelectorAll('.operator'); 


//2) new instance

const display = new Display(displayPreviousValue, displayCurrentValue);
//3) cada vez que se toque un número que el display lo muestre

buttonsNumber.forEach(button => {
    button.addEventListener('click', ()=>{
        display.addNumber(button.innerHTML);
    });
});

buttonsOperator.forEach(button => {
    button.addEventListener('click', ()=> display.compute(button.value));
})
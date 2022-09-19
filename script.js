function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    a = parseInt(a), b = parseInt(b);
    switch (operator) {
        case '+':
            return add(a, b); 
            break;
        case '-':
            return subtract(a, b)
            break;
        case 'x':
            return multiply(a, b);
            break; 
        case '÷':
            return divide(a, b); ;       
            break;

        default:
            break;
    }
}

// DOM

// Get number pressed 

const displayNum = document.querySelector('.result');
const btnPressed = document.querySelectorAll('.btn');
btnPressed.forEach(btn => btn.addEventListener('click', populateDisplay));

let firstNum = null;
let secondNum = null;
let operator = null;
let newOperation = false; 

function populateDisplay(e) {
    const char = e.srcElement.outerText;

    if (!isNaN(parseInt(char))){
        if (displayNum.textContent === '0' || isNaN(displayNum.textContent)|| newOperation === true) {
            displayNum.textContent = e.srcElement.outerText;
            newOperation = false;
        } else {
            displayNum.textContent += e.srcElement.outerText;
        }

    } else {
        if (displayNum.textContent === '') return;

        if (char === 'C'){
            displayNum.textContent = '';
            firstNum = null;
            return;
        }
        else if (char === '='){
           if(firstNum == null) return;

           secondNum = displayNum.textContent;
           console.log(firstNum, secondNum, operator);
           displayNum.textContent = operate(firstNum, secondNum, operator);
           firstNum = displayNum.textContent;
           secondNum = null;
        }
        else if (newOperation == false ) {
            firstNum = displayNum.textContent;
            operator = char;
            displayNum.textContent = char;
            console.log(operator)
        } else {
            secondNum = displayNum.textContent;
            console.log(firstNum, secondNum, operator);
            displayNum.textContent = operate(firstNum, secondNum, operator);
            firstNum = displayNum.textContent;
            newOperation = true;
        }
    }
};


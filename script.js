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
    a = parseFloat(a), b = parseFloat(b);
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
        case '=':
            return a;
            break;
        default:
            break;
    }
}

// DOM

let firstNum = null;
let secondNum = null;
let operator = null;
let newNumber = false; 


const btnPressed = document.querySelectorAll('.btn');
btnPressed.forEach(btn => btn.addEventListener('click', populateDisplay));

function populateDisplay(e) {
    const displayNum = document.querySelector('.result');
    const char = e.srcElement.outerText;

    // number pressed
    if (!isNaN(parseInt(char))){
        if (displayNum.textContent === '0' || isNaN(displayNum.textContent)|| newNumber === true) {
            displayNum.textContent = e.srcElement.outerText;
            newNumber = false;
        } else {
            displayNum.textContent += e.srcElement.outerText;
        }
    } else { // other pressed

        if (char === 'C'){
            displayNum.textContent = '0';
            firstNum = null;
            secondNum = null;
            operator = null;
            return;
        }
        else if  (char === '+/-') {
            displayNum.textContent = displayNum.textContent * -1;
        }
        else if  (char === '.') {
            displayNum.textContent += '.';
        }
        else if (char === 'del') {
            displayNum.textContent = displayNum.textContent.slice(0, -1);
        }

        else if (firstNum == null) {
            
            firstNum = displayNum.textContent;
            operator = char;
            newNumber = true;
        } else {

            secondNum = displayNum.textContent;
            displayNum.textContent = operate(firstNum, secondNum, operator);
            firstNum = displayNum.textContent;
            secondNum = null;
            newNumber = true;
            operator = char;
            if(operator === '=') {
                firstNum = null;
            } 
        }
    } 

    if (displayNum.textContent === 'Infinity') displayNum.textContent = 'hehe xd';
}

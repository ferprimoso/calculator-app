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

const displayNum = document.querySelector('.result');

function getDisplayNumber() {
    return displayNum.textContent;
}

function writeDisplayNumber(string, checkNewNumber) {
    if (checkNewNumber === true ) {
        displayNum.textContent = string;
    } else {
        displayNum.textContent += string;
    }

    if (displayNum.textContent.length > 9) {
        displayNum.textContent = displayNum.textContent.slice(0, 9);
    } 
}


function populateDisplay(e) {
    const char = e.srcElement.outerText;

    // number pressed
    if (!isNaN(parseInt(char))){
        if (getDisplayNumber() === '0' || isNaN(getDisplayNumber())|| newNumber === true) {
            writeDisplayNumber(char, true);
            newNumber = false;
        } else {
            writeDisplayNumber(char);
        }
    } else { // other pressed

        if (char === 'C'){
            writeDisplayNumber('0', true);
            firstNum = null;
            secondNum = null;
            operator = null;
            return;
        }
        else if  (char === '+/-') {
            writeDisplayNumber(getDisplayNumber() * -1, true);
        }
        else if (char === 'del') {
            writeDisplayNumber(getDisplayNumber().slice(0, -1), true);
        }
        else if (char === '.') {
            writeDisplayNumber(char);
        }
        else if (firstNum == null) {
            
            firstNum = getDisplayNumber();
            operator = char;
            newNumber = true;
        } else {
            secondNum = getDisplayNumber();
            writeDisplayNumber(operate(firstNum, secondNum, operator), true);
            firstNum = getDisplayNumber();
            secondNum = null;
            newNumber = true;
            operator = char;
            if(operator === '=') {
                firstNum = null;
            } 
        }
    } 

    if (getDisplayNumber() === 'Infinity') writeDisplayNumber('hehe xd', true);
}

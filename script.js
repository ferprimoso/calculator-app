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
    switch (operator) {
        case '+':
            return add(a, b); 
            break;
        case '-':
            return subtract(a, b)
            break;
        case '*':
            return multiply(a, b);
            break; 
        case '/':
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

let firstNum = 0;



function populateDisplay(e) {

    const char = e.srcElement.outerText;
    
   if (!isNaN(parseInt(char))){
        if (displayNum.textContent === '0' || isNaN(displayNum.textContent)) {
            displayNum.textContent = e.srcElement.outerText;
        } else {
            displayNum.textContent += e.srcElement.outerText;
        }

    } else {
        if (char === 'C'){
            displayNum.textContent = 0;
            return;
        }
        let firstNum = displayNum.textContent;
        let operator = char;
        console.log(operator)
    }
};


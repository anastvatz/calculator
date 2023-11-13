let n1 = "";
let n2 = "";
let oper = "";
let result = '';
let flag = 0;


const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
// const deleteButton = document.querySelector('.delete')
const currentOperand = document.querySelector('.current-operand');
const previousOperand = document.querySelector('.previous-operand');
const equalsKey = document.querySelector('.equals');

currentOperand.textContent = 0;

numberButton.forEach((number) => {
    number.addEventListener('click', function () {
        n1 += number.innerHTML;
        currentOperand.textContent = n1;
    })
});

function displayResult() {
    result = operate(Number(n1), clickedOperator, Number(n2))
    // update content of current operation with result and previous operand with the calculation, make n1 = result
    currentOperand.textContent = result;
    previousOperand.textContent = n2 + ' ' + clickedOperator + ' ' + n1;
    n1 = result;
    console.log('n2' + n2 + 'Stored' + n1);
}

operatorButton.forEach((operator => {
    operator.addEventListener('click', function () {
        if (n2 && n1 && flag == 0) {
            displayResult();
            // alert ("DONE");
        }
        // save the first number
        n2 = n1;

        // get the operator that was clicked
        clickedOperator = operator.textContent;
        previousOperand.textContent = n2 + clickedOperator;
        n1 = '';

        console.log('n2' + n2 + 'Stored' + n1)
        console.log(clickedOperator);
        flag = 0;
    })
}));

equalsKey.addEventListener('click', function () {
    result = operate(Number(n1), clickedOperator, Number(n2));
    flag = 1;
    // update content of current operation with result and previous operand with the calculation, make n1 = result
    currentOperand.textContent = result;
    previousOperand.textContent = n2 + ' ' + clickedOperator + ' ' + n1;
    n1 = result;
    console.log('n2' + n2 + 'Stored' + n1);
});



function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n2 - n1;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    if (n1 != 0) {
        return n2 / n1;
    }
    else {
        alert("Error cannot divide by zero!");
        clearFunction();
        // return 0;
    }
}

function operate(n1, oper, n2) {
    switch (oper) {
        case "+":
            return add(n1, n2);
        case "-":
            return subtract(n1, n2);
        case "*":
            return multiply(n1, n2);
        case "/":
            return divide(n1, n2);
    }
}

clearButton.addEventListener('click', clearFunction);

function clearFunction() {
    n1 = "";
    n2 = "";
    oper = "";
    result = 0;
    flag = 1;
    currentOperand.textContent = 0;
    previousOperand.textContent = "";
}
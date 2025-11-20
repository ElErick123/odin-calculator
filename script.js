const display = document.getElementById("display-screen");
const anyBtn = document.querySelectorAll("button");
const numberButtons = document.querySelectorAll(".black-button");
const operatorButtons = document.querySelectorAll(".orange-button, #remainder-button");
const dotBtn = document.getElementById("dot-button");
const delBtn = document.getElementById("del-button");
const clearBtn = document.getElementById("clear-button");
const operators = ["+", "-", "x", "/", "%", "="];

let firstNum = 0;
let secondNum = 0;
let operator = "";
let shouldResetDisplay = false;

dotBtn.addEventListener("click", () => {

});

anyBtn.forEach((button) => {

});

delBtn.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0, display.textContent.length - 1);
    for (let digit of display.textContent) {
        if (operators.includes(digit)) {
            operator = digit;
        }
        else {
            operator = "";
        }
    }
    if (display.textContent === "") {
        display.textContent = "0";
    }
});

clearBtn.addEventListener("click", () => {
    display.textContent = "0";
    firstNum = 0;
    secondNum = 0;
    operator = "";
});

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (display.textContent === "0") {
            display.textContent = button.textContent;
            return;
        }
        display.textContent += button.textContent;
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const lastDigit = display.textContent.slice(display.textContent.length - 1, display.textContent.length);
        if (operators.includes(lastDigit)) {
            return;
        }
        if (operator === "") {
            if (button.textContent === "=") {
                return;
            }
            else {
                operator = button.textContent;
                display.textContent += button.textContent;
                return;
            }
        }
        let numbers = display.textContent.split(operator);
        firstNum = numbers[0];
        secondNum = numbers[1];
        firstNum = operate(operator, firstNum, secondNum);
        operator = button.textContent;
        secondNum = 0;
        if (operator !== "=") {
            operator = button.textContent;
            display.textContent = firstNum + operator;
        }
        else {
            operator = "";
            display.textContent = firstNum;
            shouldResetDisplay = true;
        }
    });
});

function operate(operator, a, b) {
    switch (operator) {
        case "+":

        case "-":

        case "x":

        case "/":

        case "%":

    }
}
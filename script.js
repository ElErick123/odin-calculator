const display = document.getElementById("display-screen");
const numberButtons = document.querySelectorAll(".black-button");
const operatorButtons = document.querySelectorAll(".orange-button");
const operators = ["+", "-", "x", "/", "%", "="];

numberButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (display.textContent === "0") {
            display.textContent = e.target.textContent;
        }
        else {
            display.textContent += e.target.textContent;
        }
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const lastDigit = display.textContent.slice(display.textContent.length - 1, display.textContent.length);
        if (operators.includes(lastDigit)) {
            return;
        }
        for(let digit of display.textContent) {
            if (operators.includes(digit)) {
                const numbers = display.textContent.split(digit);
                const operator = digit;
                operate(operator, +numbers[0], +numbers[1]);
            }
        }
        if (e.target.textContent !== "=") display.textContent += e.target.textContent;
    });
});

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

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            display.textContent = add(a, b);
            break;
        case "-":
            display.textContent = subtract(a, b);
            break;
        case "x":
            display.textContent = multiply(a, b);
            break;
        case "/":
            display.textContent = divide(a, b);
            break;
    }
}
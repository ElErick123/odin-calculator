const display = document.getElementById("display-screen");
const numberButtons = document.querySelectorAll(".black-button");
const operatorButtons = document.querySelectorAll(".orange-button");
const operators = ["+", "-", "x", "/", "%"];

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
        console.log(lastDigit);
        if (operators.includes(lastDigit)) {
            return
        }
        display.textContent += e.target.textContent;
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
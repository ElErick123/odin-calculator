const display = document.getElementById("display-screen");
const anyBtn = document.querySelectorAll("button");
const numberButtons = document.querySelectorAll(".black-button");
const operatorButtons = document.querySelectorAll(".orange-button, #remainder-button");
const delBtn = document.getElementById("del-button");
const clearBtn = document.getElementById("clear-button");
const operators = ["+", "-", "x", "/", "%", "="];

anyBtn.forEach((button) => {
    button.addEventListener("click", () => {
        if (display.textContent === "ERROR") {
            display.textContent = "0";
        }
    });
});

delBtn.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0, display.textContent.length - 1);
    if (display.textContent === "") display.textContent = "0";
});

clearBtn.addEventListener("click", () => {
    display.textContent = "0";
});

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
    if (b === 0) return "ERROR";
    return a / b;
}

function remainder(a, b) {
    return a % b;
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
        case "%":
            display.textContent = remainder(a, b);
            break;
    }
}
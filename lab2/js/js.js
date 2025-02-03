//Ex1
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");
const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");

function calculate(operation) {
    const val1 = parseFloat(num1.value) || 0;
    const val2 = parseFloat(num2.value) || 0;
    let res;

    switch (operation) {
        case "add":
            res = val1 + val2;
            break;
        case "subtract":
            res = val1 - val2;
            break;
        case "multiply":
            res = val1 * val2;
            break;
        case "divide":
            res = val2 !== 0 ? val1 / val2 : "Error";
            break;
        default:
            res = 0;
    }

    result.textContent = res;
}

addBtn.addEventListener("click", () => calculate("add"));
subtractBtn.addEventListener("click", () => calculate("subtract"));
multiplyBtn.addEventListener("click", () => calculate("multiply"));
divideBtn.addEventListener("click", () => calculate("divide"));


//Ex2
const rowsInput = document.getElementById("rows");
const colsInput = document.getElementById("cols");
const generateBtn = document.getElementById("generate");
const tableContainer = document.getElementById("tableContainer");

function generateTable() {
    const rows = parseInt(rowsInput.value) || 0;
    const cols = parseInt(colsInput.value) || 0;
    tableContainer.innerHTML = "";

    if (rows > 0 && cols > 0) {
        const table = document.createElement("table");
        table.style.borderCollapse = "collapse";
        table.style.margin = "20px auto";

        for (let i = 0; i < rows; i++) {
            const tr = document.createElement("tr");
            for (let j = 0; j < cols; j++) {
                const td = document.createElement("td");
                td.textContent = `(${i + 1}, ${j + 1})`;
                td.style.border = "1px solid black";
                td.style.padding = "10px";
                td.style.textAlign = "center";
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        tableContainer.appendChild(table);
    } else {
        tableContainer.textContent = "Please enter valid row and column numbers.";
    }
}

generateBtn.addEventListener("click", generateTable);


//Ex3
function updateClock() {
    const clock = document.getElementById("clock");
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);


//Ex4
const randomNumber = Math.floor(Math.random() * 100) + 1;
const guessInput = document.getElementById("guess");
const submitButton = document.getElementById("submitGuess");
const feedback = document.getElementById("feedback");

submitButton.addEventListener("click", function () {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback.textContent = "Please enter a valid number between 1 and 100.";
        feedback.style.color = "red";
        return;
    }

    if (userGuess === randomNumber) {
        feedback.textContent = "Correct! You guessed it!";
    } else if (userGuess < randomNumber) {
        feedback.textContent = "Too low";
    } else {
        feedback.textContent = "Too high";
    }
});
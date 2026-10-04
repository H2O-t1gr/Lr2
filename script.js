"use strict";

const studentFirstName = "Денис";
const journalNumber    = 19;

function requestNonEmptyName(message) {
    const containsDigit = /\d/;
    let text = prompt(message);

    while (!text || text.trim() === "" || containsDigit.test(text)) {
        text = prompt("Помилка! Поле не може бути пустим або містити цифри.\n" + message);
    }

    return text.trim();
}

function requestIntegerInRange(message, min, max) {
    let text = prompt(message);

    while (!text || text.trim() === "" || !Number.isInteger(Number(text))
           || Number(text) < min || Number(text) > max) {
        text = prompt(`Помилка! Потрібне ціле число від ${min} до ${max}.\n` + message);
    }

    return Number(text);
}

function requestInteger(message) {
    return requestIntegerInRange(message, -Infinity, Infinity);
}

function requestNumber(message) {
    let text = prompt(message);

    while (!text || text.trim() === "" || !Number.isFinite(Number(text))) {
        text = prompt("Помилка! Введіть коректне число.\n" + message);
    }

    return Number(text);
}

function addLine(boxId, text, className = "") {
    const line = document.createElement("p");
    line.textContent = text;
    if (className) line.className = className;
    document.getElementById(boxId).appendChild(line);
}

function showMessage(boxId, text) {
    document.getElementById(boxId).innerHTML = "";
    addLine(boxId, text);
}



// Завдання 1 
function task1Greeting() {
    const userName = requestNonEmptyName("Введіть ваше ім'я:");
    const message = `Hello, ${userName}! Welcome to JavaScript`;

    alert(message);
    showMessage("box1", message);
}

// Завдання 2 
function task2BirthYear() {
    const age = requestIntegerInRange("Скільки вам років?", 1, 120);
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - age;
    const message = `You were born in ${birthYear}`;

    alert(message);
    showMessage("box2", message);
}

// Завдання 3
function task3FullName() {
    const firstName = requestNonEmptyName("Введіть ім'я:");
    const lastName = requestNonEmptyName("Введіть прізвище:");

    const concatVariant = "Your full name is " + firstName + " " + lastName;
    const templateVariant = `Your full name is ${firstName} ${lastName}`;

    console.log(concatVariant);
    console.log(templateVariant);

    showMessage("box3", templateVariant);
    addLine("box3", "(обидва варіанти виведено у консоль)", "note");
}


// Завдання 4
let userName = studentFirstName;


function task4ScopeDemo() {
    let blockUserName;

    if (true) {
        let userName = requestNonEmptyName("Введіть інше ім'я окрім Денис(діятиме лише всередині блоку if):");
        blockUserName = userName;
        console.log("userName всередині блоку if:", userName);
    }

    console.log("userName у глобальній області:", userName);

    showMessage("box4", `Глобальне значення (поза блоком): ${userName}`);
    addLine("box4", `Значення всередині блоку if: ${blockUserName}`);
    addLine("box4",
        "Змінна userName всередині if оголошена через let, тому існує лише в цьому блоці й не змінює глобальну userName з тією самою назвою.","note");
}

// Завдання 5
function task5ConfirmAge() {
    const name = requestNonEmptyName("Введіть ваше ім'я:");
    const age = requestIntegerInRange("Введіть ваш вік:", 1, 120);

    const pressedOk = confirm(`Hello, ${name}! Your age is ${age}. Continue?`);
    const message = pressedOk ? "Welcome!" : "Goodbye!";

    alert(message);
    showMessage("box5", message);
}

// Завдання 6 
function task6EvenOdd() {
    const number = requestInteger("Введіть ціле число:");
    const message = number % 2 === 0 ? "Number is even" : "Number is odd";

    alert(message);
    showMessage("box6", `${number}: ${message}`);
}



// Завдання 7 
function calculate() {
    let result = 10;
    let innerResult;

    if (true) {
        let result = 20;
        innerResult = result;
        console.log("result всередині блоку if:", result);
    }

    console.log("result зовні блоку if (в межах функції calculate):", result);
    return { outerResult: result, innerResult: innerResult };
}

function task7ScopeFunction() {
    const values = calculate();

    showMessage("box7", `result всередині функції calculate (поза if): ${values.outerResult}`);
    addLine("box7", `result всередині блоку if: ${values.innerResult}`);
    addLine("box7",
        "Обидва значення виведено у консоль. Це демонструє блочну область видимості let: " +
        "внутрішня змінна result існує лише в межах блоку if і не впливає на зовнішню.",
        "note");
}

// Завдання 8 
const secretNumber = journalNumber % 10;

function task8SecretNumber() {
    const guess = requestIntegerInRange("Вгадайте число від 0 до 9:", 0, 9);
    const message = guess === secretNumber ? "Correct!" : "Wrong!";

    alert(message);
    showMessage("box8", message);
}

// Завдання 9 
function task9Sum() {
    const name = requestNonEmptyName("Введіть ваше ім'я:");
    const num1 = requestNumber("Введіть перше число:");
    const num2 = requestNumber("Введіть друге число:");
    const sum = num1 + num2;

    const message = "Hello, " + name + "! The sum of " + num1 + " and " + num2 + " is " + sum;
    console.log(message);

    showMessage("box9", message);
}

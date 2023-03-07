// // issues
// // make mouse point to the buttons not highlight it as text

// let firstNumArr = [];
// let firstNum = firstNumArr.join("");
// let secNumArr = [];
// let secNum = Number(secNumArr.join(""));
// let operator;
// let result = 0;

// let resultText = document.querySelector(".result");
// let firstNumText = document.querySelector(".first-num");
// let secNumText = document.querySelector(".sec-num");
// let operatorText = document.querySelector(".operator");
// let add = document.querySelector(".adding-operator");
// let subtract = document.querySelector(".subtract-operator");
// let multiply = document.querySelector(".multiply-operator");
// let divide = document.querySelector(".divide-operator");
// let numOne = document.getElementById("num-1");
// let numTwo = document.querySelector("#num-2");
// let numThree = document.querySelector("#num-3");
// let numFour = document.querySelector("#num-4");
// let numFive = document.querySelector("#num-5");
// let numSix = document.querySelector("#num-6");
// let numSeven = document.querySelector("#num-7");
// let numEight = document.querySelector("#num-8");
// let numNine = document.querySelector("#num-9");
// let zero = document.querySelector("#zero-button");
// let decimal = document.querySelector("#decimal");
// let clearButton = document.querySelector(".ce-button");
// let delButton = document.querySelector(".del-button");
// let equal = document.querySelector(".equal-button");

// clearButton.addEventListener("click", clear);
// delButton.addEventListener("click", () => delNum(firstNumArr));
// numOne.addEventListener("click", () => {
//   inputNum(1);
// });
// numTwo.addEventListener("click", () => {
//   inputNum(2);
// });
// numThree.addEventListener("click", () => {
//   inputNum(3);
// });
// numFour.addEventListener("click", () => {
//   inputNum(4);
// });
// numFive.addEventListener("click", () => {
//   inputNum(5);
// });
// numSix.addEventListener("click", () => {
//   inputNum(6);
// });
// numSeven.addEventListener("click", () => {
//   inputNum(7);
// });
// numEight.addEventListener("click", () => {
//   inputNum(8);
// });
// numNine.addEventListener("click", () => {
//   inputNum(9);
// });
// decimal.addEventListener("click", () => {
//   inputNum(".");
//   removeDot(firstNumArr)
// });

// function resetFirstNum() {
//   firstNumText.innerText = `${firstNumArr.slice(0, 5).join("")}`;
// }

// function inputNum(num) {
//   firstNumArr.push(num);
//   resetFirstNum();
// }

// function delNum(arr) {
//   arr.splice(5, Infinity);
//   arr.splice(-1);
//   resetFirstNum();
// }

// function clear() {
//   firstNumArr = [];
//   secNumArr = [];
//   result = 0;
//   resetFirstNum();
// }

// function removeDot(arr){
//     if (arr.includes('.') === true){
//         arr.splice(-1)
//     }
// }

// // .innerText = `${operator}`;
// // .innerText = `${secNum}`;
// // .innerText = `${result}`
/////////////////////////////////////////////////////////////
let firstNum = "";
let secNum = "";
let operator = null;
let shouldResetScreen = false;

const operatorBtns = document.querySelectorAll("[data-operator]");
const numberBtns = document.querySelectorAll("[data-number]");
const decimal = document.querySelector("#decimal");
const clearButton = document.querySelector(".ce-button");
const delButton = document.querySelector(".del-button");
const equal = document.querySelector(".equal-button");
const lastOperationScreen = document.getElementById("lastOperationScreen");
const currentOperationScreen = document.getElementById(
  "currentOperationScreen"
);

equal.addEventListener("click", evaluate);
clearButton.addEventListener("click", clear);
delButton.addEventListener("click", deleteNum);
decimal.addEventListener("click", appendPoint);
numberBtns.forEach((btn) =>
  btn.addEventListener("click", () => appendNumber(btn.textContent))
);
operatorBtns.forEach(
  (btn) => btn.addEventListener("click",
  () => setOperation(btn.textContent)
));

function clear() {
  firstNum = "";
  secNum = "";
  operator = null;
  currentOperationScreen.textContent = "0";
  lastOperationScreen.textContent = "";
}

function deleteNum() {
  currentOperationScreen.textContent = currentOperationScreen.textContent
    .toString()
    .slice(0,-1);
}

function appendNumber(num) {
  if (shouldResetScreen || currentOperationScreen.textContent === "0") resetScreen();
  currentOperationScreen.textContent += num;
}

function appendPoint() {
  if (shouldResetScreen) resetScreen();
  if (currentOperationScreen.textContent === "")
    currentOperationScreen.textContent = "0";
    if (currentOperationScreen.textContent.includes('.')) return
    currentOperationScreen.textContent += '.'
}

function setOperation(operatorSign) {
  if (operator !== null) evaluate();
  firstNum = currentOperationScreen.textContent;
  operator = operatorSign;
  lastOperationScreen.textContent = `${firstNum} ${operator}`;
  shouldResetScreen = true;
}

function resetScreen() {
  currentOperationScreen.textContent = "";
  shouldResetScreen = false;
}

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

function operate(operate, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operate) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "×":
      return multiply(a, b);
    case "÷":
      if (b === 0) return null;
      else return divide(a, b);
    default:
      return null;
  }
}

function roundResult(num) {
  return Math.round(num * 1000) / 1000;
}

function evaluate() {
  if (operator === null || shouldResetScreen) return;
  if (operator === "÷" && currentOperationScreen.textContent === "0") {
    alert("Math Error - You Can't Divide by Zero!");
    return;
  }
  secNum = currentOperationScreen.textContent;
  currentOperationScreen.textContent = roundResult(
    operate(operator, firstNum, secNum)
  );
  lastOperationScreen.textContent = `${firstNum} ${operator} ${secNum} =`;
  operator = null;
}

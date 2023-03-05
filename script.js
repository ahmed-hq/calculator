// issues
// make mouse point to the buttons not highlight it as text

let firstNumArr = [];
let firstNum = firstNumArr.join("");
let secNumArr = [];
let secNum = Number(secNumArr.join(""));
let operator;
let result = 0;



let resultText = document.querySelector(".result");
let firstNumText = document.querySelector(".first-num");
let secNumText = document.querySelector(".sec-num");
let operatorText = document.querySelector(".operator");
let add = document.querySelector(".adding-operator");
let subtract = document.querySelector(".subtract-operator");
let multiply = document.querySelector(".multiply-operator");
let divide = document.querySelector(".divide-operator");
let numOne = document.getElementById("num-1");
let numTwo = document.querySelector("#num-2");
let numThree = document.querySelector("#num-3");
let numFour = document.querySelector("#num-4");
let numFive = document.querySelector("#num-5");
let numSix = document.querySelector("#num-6");
let numSeven = document.querySelector("#num-7");
let numEight = document.querySelector("#num-8");
let numNine = document.querySelector("#num-9");
let zero = document.querySelector("#zero-button");
let decimal = document.querySelector("#decimal");
let clearButton = document.querySelector(".ce-button");
let delButton = document.querySelector(".del-button");
let equal = document.querySelector(".equal-button");

clearButton.addEventListener("click", clear);
delButton.addEventListener('click',() => delNum(firstNumArr))
numOne.addEventListener("click", () => {
  inputNum(1);
});
numTwo.addEventListener("click", () => {
  inputNum(2);
});
numThree.addEventListener("click", () => {
  inputNum(3);
});
numFour.addEventListener("click", () => {
  inputNum(4);
});
numFive.addEventListener("click", () => {
  inputNum(5);
});
numSix.addEventListener("click", () => {
  inputNum(6);
});
numSeven.addEventListener("click", () => {
  inputNum(7);
});
numEight.addEventListener("click", () => {
  inputNum(8);
});
numNine.addEventListener("click", () => {
  inputNum(9);
});
decimal.addEventListener("click", () => {
  inputNum(".");
});

function resetFirstNum() {
  firstNumText.innerText = `${firstNumArr.slice(0,4).join("")}`;
}

function inputNum(num) {
  firstNumArr.push(num);
  resetFirstNum();
}

function delNum(arr) {
    arr.splice(4,Infinity);
    arr.splice(-1);
    resetFirstNum();
  }

function clear() {
  firstNumArr = [];
  secNumArr = [];
  result = 0;
  resetFirstNum();
}

// .innerText = `${operator}`;
// .innerText = `${secNum}`;
// .innerText = `${result}`

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
let numOne = document.getElementById("num-1");
let numTwo = document.querySelector("#num-2");
let numThree = document.querySelector("#num-3");
let numFour = document.querySelector("#num-4");
let numFive = document.querySelector("#num-5");
let numSix = document.querySelector("#num-6");
let numSeven = document.querySelector("#num-7");
let numEight = document.querySelector("#num-8");
let numNine = document.querySelector("#num-9");
let clearButton = document.querySelector(".ce-button")

clearButton.addEventListener("click", clear)

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


function resetFirstNum(){
    firstNumText.innerText = `${firstNumArr.join("")}`;
}

function inputNum(num) {
  firstNumArr.push(num);
  resetFirstNum()
}

function clear() {
  firstNumArr = [];
  secNumArr = [];
  result = 0;
  resetFirstNum()
  
}


// .innerText = `${operator}`;
// .innerText = `${secNum}`;
// .innerText = `${result}`

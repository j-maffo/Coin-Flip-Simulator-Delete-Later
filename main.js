// COIN FLIP SIMULATOR

// HTML VARIABLES
let outputEl = document.getElementById("output");
let output2El = document.getElementById("output2");
let output3El = document.getElementById("output3");

let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");

let el6 = document.getElementById("6-out");
let el5 = document.getElementById("5-out");
let el4 = document.getElementById("4-out");
let el3 = document.getElementById("3-out");
let el2 = document.getElementById("2-out");
let el1 = document.getElementById("1-out");
// Count Variables
let numHeads = 0;
let numTails = 0;

let num6 = 0;
let num5 = 0;
let num4 = 0;
let num3 = 0;
let num2 = 0;
let num1 = 0;
// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);
document.getElementById("btn2").addEventListener("click", btn2Clicked);
function btnClicked() {
  // Generate a Random Number
  let randNum = Math.random();
  console.log(randNum);

  // Hidden ELements
  output2El.style.display = "none";
  // Simulate the Coin Flip
  if (randNum < 0.5) {
    outputEl.innerHTML = "<img src= 'img/heads.png' alt= 'Coin Head Side' />";
    numHeads++;
    headsEl.innerHTML = numHeads;
  } else {
    outputEl.innerHTML = "<img src= 'img/tails.png' alt='Coin Head Side' />";
    numTails++;
    tailsEl.innerHTML = numTails;
  }
}
function btn2Clicked() {
  // Generate a Random Number
  let randNum1 = Math.floor(Math.random() * 6 + 1);
  console.log(randNum1);
  let randNum2 = Math.floor(Math.random() * 6 + 1);
  console.log(randNum2);

  // Simulate first die roll
  if (randNum1 == 6) {
    outputEl.innerHTML = "<img src= 'img/6.png' width= '250' height='250' />";
    num6++;
    el6.innerHTML = num6;
  } else if (randNum1 == 5) {
    outputEl.innerHTML = "<img src= 'img/5.png' width= '250' height='250' />";
    num5++;
    el5.innerHTML = num5;
  } else if (randNum1 == 4) {
    outputEl.innerHTML = "<img src= 'img/4.png' width= '250' height='250' />";
    num4++;
    el4.innerHTML = num4;
  } else if (randNum1 == 3) {
    outputEl.innerHTML = "<img src= 'img/3.png' width= '250' height='250' />";
    num3++;
    el3.innerHTML = num3;
  } else if (randNum1 == 2) {
    outputEl.innerHTML = "<img src= 'img/2.png' width= '250' height='250' />";
    num2++;
    el2.innerHTML = num2;
  } else {
    outputEl.innerHTML = "<img src= 'img/1.png' width= '250' height='250' />";
    num1++;
    el1.innerHTML = num1;
  }
  // Simulate second die roll
  if (randNum2 == 6) {
    output2El.innerHTML = "<img src= 'img/6.png' width= '250' height='250' />";
    num6++;
    el6.innerHTML = num6;
  } else if (randNum2 == 5) {
    output2El.innerHTML = "<img src= 'img/5.png' width= '250' height='250' />";
    num5++;
    el5.innerHTML = num5;
  } else if (randNum2 == 4) {
    output2El.innerHTML = "<img src= 'img/4.png' width= '250' height='250' />";
    num4++;
    el4.innerHTML = num4;
  } else if (randNum2 == 3) {
    output2El.innerHTML = "<img src= 'img/3.png' width= '250' height='250' />";
    num3++;
    el3.innerHTML = num3;
  } else if (randNum2 == 2) {
    output2El.innerHTML = "<img src= 'img/2.png' width= '250' height='250' />";
    num2++;
    el2.innerHTML = num2;
  } else {
    output2El.innerHTML = "<img src= 'img/1.png' width= '250' height='250' />";
    num1++;
    el1.innerHTML = num1;
  }
  // Displayed Elements
  output2El.style.display = "inherit";
  // Sum of both dices
  let sumOfDices = randNum1 + randNum2;
  output3String = `The sum of both dice is ${sumOfDices} `;
  output3El.innerHTML = output3String;
}

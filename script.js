"use strict";

//Selecting Elements
/*
console.log(document.querySelector(".message").textContent);  // to see the text content
document.querySelector(".message").textContent = "🎉Correct Number!";  // to manipulate the text written in this 
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23; // to manipulate the value in input tag with class name of guess.
console.log(document.querySelector('.guess').value); // to see the value in input tag with class name of guess.
*/

//Event Listener

//Task of Check button
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;

const displayMessage = function(message){
  document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value); //user input will be in string

  //When there is no input
  if (!guess) displayMessage("⛔ No Number!");

  //When guess is low or high
  else if (guess != secretNumber) {
    if (score > 1) {
      document.querySelector(".score").textContent = --score;
      displayMessage(guess < secretNumber ? "📉 Too Low!" : "📈 Too High!");
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }


  //When user wins the game
  else {
    displayMessage("🎉 Correct Number!");
    document.querySelector("#question-mark").textContent = secretNumber;
    document.querySelector(".score").textContent = --score;
    const oldHighScore = document.querySelector(".highscore").textContent;
    if (score > oldHighScore)
      document.querySelector(".highscore").textContent = score;

    // CSS Manipulation
    document.body.style.backgroundColor = "#60b347";
    // document.querySelector('#question-mark').style.width = '15rem';
  }
});

//Task of Again button

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".score").textContent = 20;
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector("#question-mark").textContent = "?";
  document.querySelector("#question-mark").style.width = "10rem";
  document.body.style.backgroundColor = "rgb(35, 35, 35)";
  document.querySelector(".guess").value = "";
});

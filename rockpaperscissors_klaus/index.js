"use strict";
let userChoice;
let computerChoice;
const rockBtn = document.querySelector(".rock");
const scissorsBtn = document.querySelector(".scissors");
const paperBtn = document.querySelector(".paper");

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

addEventListnersToButtons();
function addEventListnersToButtons() {
  rockBtn.addEventListener("click", rockKlik);
  scissorsBtn.addEventListener("click", scissorsKlik);
  paperBtn.addEventListener("click", paperKlik);
}

function rockKlik() {
  //   console.log("ROCK");
  userChoice = "rock";
  computerGuess();
}
function scissorsKlik() {
  //   console.log("SCISSORS");
  userChoice = "scissors";
  computerGuess();
}
function paperKlik() {
  //   console.log("PAPER");
  userChoice = "paper";
  computerGuess();
}

function computerGuess() {
  const choice_arr = ["rock", "scissors", "paper"];
  const randomNum = Math.floor(Math.random() * 3);
  computerChoice = choice_arr[randomNum];
  console.log("computerChoice", computerChoice);

  //   console.log(randomNum);

  //     console.log(userChoice);
  //   computerChoice = "paper";
  animationStarter();
}

function animationStarter() {
  player1.classList.add("shake");
}

function animationSlut() {
  //evaluation
}

function visResultat() {}

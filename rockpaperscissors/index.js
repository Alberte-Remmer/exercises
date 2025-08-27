"use strict";

//1: Jeg laver en variabel for computerens og spillerens valg:
let userChoice; //let fordi variablen kan ændre sig undervejs
let computerChoice;

//2: Jeg gemmer computeren og spillerens hænder i variabler, så jeg kan ændre deres udseende og animation.
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

//3: Jeg gemmer referencer til sten, saks, papir-knapperne, så de kan reagere på klik fra spilleren
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

//4: Jeg laver en funktion, som giver computeren et tilfældigt valg mellem sten, saks, papir
function computerGuess() {
  //array med de tre mulige valg: choices[0] = "rock", choices[1] = "paper", choices[2] = "scissors"
  const choices = ["rock", "paper", "scissors"];
  //Jeg bruger math til at få et random tal mellem 0 og 2.
  const randomNum = Math.floor(Math.random() * 3); //Math.floor runder ned fra 3 til 2.
  //Jeg sætter computeren (computerChoice) til det tilfældige valg (chioces - altså sten, saks eller papir)
  computerChoice = choices[randomNum];
  console.log("computerens valg:", computerChoice);
}

//5: Jeg kalder funktionen så computeren tager et valg når spillet starter
computerGuess();

//6: Jeg tilføjer nu eventListneners til sten-, saks-, papir-knapperne så brugeren kan vælge sit udfald
addEventListnersToButtons();
function addEventListnersToButtons() {
  rockBtn.addEventListener("click", rockKlik);
  scissorsBtn.addEventListener("click", scissorsKlik);
  paperBtn.addEventListener("click", paperKlik);
}

//7 Jeg laver en funktion der starter shake-animation, så jeg kan indsætte funktionen i hver af nedenstående knapper, så hænderne begynder at shake.
function startShake() {
  player1.className = "player shake";
  player2.className = "player shake";
}

//8: Jeg sørger for, at når shake-animationen er færdig, så skal hændernde vise de rigtige tegn.
player1.addEventListener("animationend", function () {
  player1.className = `player ${userChoice}`;
  player2.className = `player ${computerChoice}`;
  visResultat();
});

//9: Jeg aktivere nu funktionen, så når spilleren klikker på en knap, så gemmes spillerens valg og viser animationen.
function rockKlik() {
  userChoice = "rock";
  // Vis rock på spillerens hånd (udfra css klasserne)
  player1.className = "player rock";
  console.log("Spillerens valg:", userChoice);
  computerGuess();
  startShake();
}
function scissorsKlik() {
  userChoice = "scissors";
  // Vis scissors på spillerens hånd (udfra css klasserne)
  player1.className = "player scissors";
  console.log("Spillerens valg:", userChoice);
  computerGuess();
  startShake();
}
function paperKlik() {
  userChoice = "paper";
  // Vis paper på spillerens hånd (udfra css klasserne)
  player1.className = "player paper";
  console.log("Spillerens valg:", userChoice);
  computerGuess();
  startShake();
}

//10: Jeg laver en funktion, som kan vise hvem der har vundet
function visResultat() {
  //Først laver jeg variabler til alle resultat-udfald
  const winDiv = document.querySelector("#win");
  const loseDiv = document.querySelector("#lose");
  const drawDiv = document.querySelector("#draw");

  //Derefter skjuler jeg alle resultater, så de ikke bliver vist til at starte med
  winDiv.classList.add("hidden");
  loseDiv.classList.add("hidden");
  drawDiv.classList.add("hidden");

  // Hjælpefunktion: tjekker om spilleren vinder
  function playerWins(player, computer) {
    return (player === "rock" && computer === "scissors") || (player === "paper" && computer === "rock") || (player === "scissors" && computer === "paper");
  }

  // Tjek resultatet
  if (userChoice === computerChoice) {
    drawDiv.classList.remove("hidden"); // uafgjort
  } else if (playerWins(userChoice, computerChoice)) {
    winDiv.classList.remove("hidden"); // spilleren vinder
  } else {
    loseDiv.classList.remove("hidden"); // computeren vinder
  }
}

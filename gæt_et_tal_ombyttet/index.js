"use strict";

//1: Jeg opretter variabler til alle elementer, så jeg kan tilgå dem fra HTML med querySelector.
const startKnap = document.querySelector("#start");
const forLavtKnap = document.querySelector("#for_lavt");
const forHøjttKnap = document.querySelector("#for_højt");
const rigtigKnap = document.querySelector("#rigtigt");
const pElement = document.getElementById("text");
const pStartIgen = document.getElementById("text_start_igen");
let computerGuess;

//2: Jeg tilføjer også et max og minimum som jeg senere kan bruge til computerens gæt
let min = 0;
let max = 100;

//Tilføjer dissolve class til alle knapper undtagen start
//Man ville nok bruge attributen diabled i stedet for dissolve i et rigtigt spil.
// attributen disabled ville gøre knapperne mere accesible for brugere med skærmlæsere. Det ville man ikke kunne læse med mine classes.
forLavtKnap.classList.add("dissolve");
forHøjttKnap.classList.add("dissolve");
rigtigKnap.classList.add("dissolve");

//3: Tilføjer klik-event til start-knappen, som kører animationStart
startKnap.addEventListener("click", animationStart);

//4: Starter animationen og får start-knappen til at dissolve
function animationStart() {
  startKnap.classList.add("dissolve");
  //Fjerner dissolve class fra de tre andre knapper
  forLavtKnap.classList.remove("dissolve");
  forHøjttKnap.classList.remove("dissolve");
  rigtigKnap.classList.remove("dissolve");
  //Får computerenen til at gætte på et tal mellem 0 og 100
  min = 0;
  max = 100;
  computerGuess = Math.floor((min + max) / 2);
  console.log("computeren gætter på: ", computerGuess);
  //Viser tallet i p med tilhørende tekst
  pElement.textContent = `Computeren gætter på ${computerGuess}`;
  //Fjerner gammel tekst og gør klar til nyt spil
  pStartIgen.textContent = "";
}

//5: Jeg tilføjer klik-event til alle tre knapper
forLavtKnap.addEventListener("click", forLavt);
forHøjttKnap.addEventListener("click", forHøjt);
rigtigKnap.addEventListener("click", rigtigGuess);

//6: Jeg laver en funktion for hvis tallet er for lavt
function forLavt() {
  // Genererer et nyt heltal mellem computerens tidligere gæt
  min = computerGuess + 1;
  computerGuess = Math.floor((min + max) / 2);
  // indsætter computerens nye gæt i p-elementet
  pElement.textContent = `Computeren gætter på ${computerGuess}`;
}

//7: Jag laver en funktion for hvis tallet er for højt
function forHøjt() {
  //Genererer et nyt heltal mellem computerens tidligere gæt
  max = computerGuess - 1;
  computerGuess = Math.floor((min + max) / 2);
  // indsætter computerens nye gæt i p-elementet
  pElement.textContent = `Computeren gætter på ${computerGuess}`;
  console.log("computeren gætter på: ", computerGuess);
}

//8: Jeg laver en funktion for hvis taller er korrekt
function rigtigGuess() {
  //Jeg ændrer i teksten og indsætter det i p-elementet
  pElement.textContent = `Wuhuuu tallet: ${computerGuess} er rigtigt! 🎉`;
  pStartIgen.textContent = `Tryk "start spillet" for at prøve igen`;
  console.log("computeren gættede rigtigt! taller er nemlig ", computerGuess);
  reset();
}

//9: Jeg laver en reset funktion, som nulstiller spillet
function reset() {
  startKnap.classList.remove("dissolve");

  //Tilføjer dissolve class til de tre andre knapper
  forLavtKnap.classList.add("dissolve");
  forHøjttKnap.classList.add("dissolve");
  rigtigKnap.classList.add("dissolve");

  //Nulstiller min og max
  min = 0;
  max = 100;
}

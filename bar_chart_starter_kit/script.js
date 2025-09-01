"use strict";
import { randomNumber } from "../utils/utils.js";

// Opretter et array til at gemme søjlerne
const soejler = []; // gemmer vi alle de søjler, vi laver

//1:

// Starter en timer, der kører funktionen genererSoejl hvert sekund (1000 ms)
setInterval(genererSoejl, 1000);

function genererSoejl() {
  console.log("Genererer søjle");

  const list = document.querySelector("ul"); // Finder <ul>-elementet i HTML'en
  const li = document.createElement("li"); // Laver et nyt <li>-element (en søjle)
  li.style.setProperty("--height", randomNumber(100)); // Giver søjlen en tilfældig højde
  list.appendChild(li); // Sætter søjlen ind i listen på siden

  soejler.push(li); // Lægger den nye søjle ind bagerst i arrayet, så vi kan holde styr på dem
  //push funktionen hjælper med at gemme alle søjlerne i den rækkefølge, de bliver lavet i.

  //Hvis der er mere end 20 søjler, fjern den første
  if (soejler.length > 20) {
    const fjernSoejle = soejler.shift(); // Fjerner den første (ældste) søjle fra arrayet
    fjernSoejle.remove(); // Fjerner den samme søjle fra HTML-listen, så den ikke vises mere
  }
}

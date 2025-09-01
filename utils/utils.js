"use strict";

//Math.random funktion:

//Returnerer et tilfældigt tal mellem 0 og max
function randomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

//Eksport af funktionen, så den kan bruges i andre filer
export default randomNumber;

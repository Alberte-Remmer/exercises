//********** Math.random funktion: **********

//Returnerer et tilfældigt tal mellem 0 og max
export function randomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

//********** Funktion til at hente data fra en JSON-fil: **********

//Jeg giver en adresse (url) og en funktion (callback), som skal køre, når data er hentet.
function loadJSON(url, callback) {
  fetch(url) //Henter data fra den adresse, jeg har givet
    .then((response) => response.json()) //Laver dataen om til et rigtigt javaScript-objekt
    .then((jsonData) => callback(jsonData)); //Kalder min egen funktion og giver den dataen.
}

//Eksport af funktionen
export { loadJSON };

// //Hvis jeg skal bruge koden (sæt dette ind i mine andre filer)
// import { loadJSON } from "../utils/utils.js"; // hvis du eksporterer flere funktioner

// // Brug funktionen:
// loadJSON("data.json", prepareData); //"data.json er hvor jeg indskifter min url"

// function prepareData(data) {
//   // Her kan du arbejde med din data
//   console.log(data);
// }

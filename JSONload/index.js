"use strict";

function loadJSON(url, callback) {
  fetch(url) //Henter data fra den adresse, jeg har givet
    .then((response) => response.json()) //Laver dataen om til et rigtigt javaScript-objekt
    .then((jsonData) => callback(jsonData)); //Kalder min egen funktion og giver den dataen.
}

// Brug funktionen:
loadJSON("https://dummyjson.com/users", prepareData); //"data.json er hvor jeg indskifter min uræ"

function prepareData(data) {
  // Her kan du arbejde med din data
  console.log(data);
}

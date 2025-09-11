"use strict";

const bar = document.querySelector("#bar");
const queue = document.querySelector("#queue");

document.addEventListener("DOMContentLoaded", setTimer);

function setTimer() {
  fetchData();
  setInterval(fetchData, 6000);
}

function fetchData() {
  fetch(`https://kea-alt-del.dk/kata-distortion/`)
    .then((response) => response.json()) // Konverterer svaret til JSON
    .then(startTimer); // Sender data videre til startTimer-funktionen
}

// function startTimer(data) {
//   console.log(data);
//   document.querySelector("#queue").textContent = data.inQueue;
//   bar.style.height = data.inQueue * 10 + "px";

//   // Sæt tallet og baren tilbage til 0 efter 700 ms
//   setTimeout(() => {
//     queueElem.textContent = 0;
//     bar.style.height = "0px";
//   }, 700);
// }

function startTimer(data) {
  console.log(data);
  queue.textContent = data.inQueue;
  bar.style.height = data.inQueue * 10 + "px";

  // Sæt tallet og baren tilbage til 0 efter 3 sekunder
  setTimeout(() => {
    queue.textContent = 0;
    bar.style.height = "0px";
  }, 5000);
}

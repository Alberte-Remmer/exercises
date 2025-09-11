"use strict";
const progress = document.getElementById("progress"); // Finder progress-bar elementet i HTML

let timer; // Variabel til at gemme timeren
let done = false; // Fortæller om animationen/handlingen er færdig
let width = 0; // Hvor meget progress-bar er fyldt (i procent)

function startAnimation() {
  // Starter en timer, der kører hvert 30. millisekund
  timer = setInterval(function () {
    // Hvis progress-bar ikke er fyldt op
    if (width < 100) {
      width += 1; // Læg 1 til width
      progress.style.width = width + "%"; // Opdater progress-bar
    } else {
      clearInterval(timer); // Stop timeren
      if (done === false) {
        document.body.style.background = "#e50914"; // Skift farve
        done = true; // Makerer at vi er færdige
      }
    }
  }, 30); // 3 sekunder i alt
}

// Når hele siden er klar, start animationen
document.addEventListener("DOMContentLoaded", startAnimation);

// Hvis brugeren bevæger musen et sted på siden, så slut animationen:
document.addEventListener("mousemove", animationEnd);

function animationEnd() {
  // Hvis handlingen ikke er udført endnu
  if (done === false) {
    clearInterval(timer); // Stop timeren (stop animationen)
    width = 100; // Sæt progress-bar til fyldt
    progress.style.width = "100%"; // Opdater progress-bar
    done = true; // Makerer at vi er færdige (men gør ikke noget andet)
  }
}

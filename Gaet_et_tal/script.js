"use strict";

//Laver et tilfældigt tal fra 0-100 og gemmer det i en variabel
const tal = Math.floor(Math.random() * 101);

console.log("Tilfældigt tal " + tal);

// Find knappen i HTML'en og lyt efter klik
document.getElementById("knap").addEventListener("click", function () {
  // Hent brugerens input fra feltet og lav det til et tal
  const brugerTal = Number(document.getElementById("tal").value);
  // Find <p> elementet hvor vi vil vise resultatet
  const resultat = document.getElementById("resultat");

  // Tjek om brugerens gæt er korrekt, for lavt eller for højt
  if (brugerTal === tal) {
    resultat.textContent = "🎉 Rigtigt! 🎉 ";
  } else if (brugerTal < tal) {
    resultat.textContent = "For lavt!";
  } else {
    resultat.textContent = "For højt!";
  }
});

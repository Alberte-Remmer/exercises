"use strict";

import randomNumber from "../utils/utils";

//Laver et tilfældigt tal fra 0-100 og gemmer det i en variabel.
//Jeg har fundet variablen tal gennem utils.js filen, som jeg har importeret her.
const tal = randomNumber(100);

console.log("Tilfældigt tal " + tal);

// Find knappen i HTML'en og lyt efter klik
document.getElementById("knap").addEventListener("click", function () {
  //Jeg henter det, brugeren har skrevet i input-feltet og konvertere det fra tekst til tal, og gemmer det i variablen brugerTal.
  //Number bruges til at konvertere teksten til et tal.
  //.value bruges til at få fat i det, brugeren rent faktisk har skrevet i feltet.
  //Uden value, ville man kun få selve HTML-elementet (<input id="tal">) og ikke det, der står i feltet.
  const brugerTal = Number(document.getElementById("tal").value);
  // Henter <p>-elementet med id="resultat", så vi kan vise svaret til brugeren
  const resultat = document.getElementById("resultat");

  // Tjek om brugerens gæt er korrekt, for lavt eller for højt:
  // Hvis brugerens tal er præcis det samme som det tilfældige tal - Vis "Rigtig!"
  if (brugerTal === tal) {
    resultat.textContent = "🎉 Rigtigt! 🎉 ";
    // Kald konfetti!
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });
    // Hvis brugerens tal er mindre end det tilfældige tal vis "For lavt!"
  } else if (brugerTal < tal) {
    resultat.textContent = "For lavt!";
  }
  // Ellers (så må det være større) - vis "For højt!"
  //Ingen krokodillemund her, for det ligger implicit.
  else {
    resultat.textContent = "For højt!";
  }
});

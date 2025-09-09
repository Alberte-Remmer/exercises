"use strict";

// Finder <select>-elementet og lytter efter ændringer (når brugeren vælger et tema)
document.querySelector("select").addEventListener("change", skiftFarve);

// Funktion der kører, når brugeren vælger et nyt tema
function skiftFarve() {
  // Henter den valgte værdi fra <select>-elementet
  const valgtTema = document.querySelector("select").value;
  // Sætter body-elementets data-theme attribut til den valgte værdi
  document.querySelector("body").dataset.theme = valgtTema;
  // Udskriver den valgte værdi i konsollen (til debugging)
  console.log(valgtTema);
}

//   console.log(document.querySelector("body").dataset.theme);
//   if (document.querySelector("body").dataset.theme === "hawaii") {
//     document.querySelector("body").dataset.theme = "hawaii";
//   } else if (document.querySelector("body").dataset.theme === "dark") {
//     document.querySelector("body").dataset.theme = "dark";
//   } else if (document.querySelector("body").dataset.theme === "light") {
//     document.querySelector("body").dataset.theme = "light";
//   }

//Klaus' svar:
// const bodyElm = document.querySelector("body");

// document.querySelector("select").addEventListener("change", (evt) => {
//   console.log(evt.target.value);

//   bodyElm.dataset.theme = evt.target.value;
// });

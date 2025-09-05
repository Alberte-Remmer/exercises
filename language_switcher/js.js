"use strict";
//Klaus løsning
//dataobjekter
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

//addEventListener
//Del af Klaus' forklaring:
document.getElementById("language-switcher").addEventListener("change", (event) => {
  console.log("Result", event.target.value);
  switchLanguage(event.target.value);
});

//Innitfunktioner
switchLanguage("da");
document.querySelector(".language").value = "da";

//Alle fdeklerationer ligger i toppen af dokumentet, så de er deklareret inden vi begynder at bruge dem.
function switchLanguage(locale) {
  texts[locale].texts.forEach((each) => {
    console.log("each", each);
    document.querySelector(each.location).textContent = each.text;
  });
}

//Løsning 1:

// document.getElementById("language-switcher").addEventListener("change", function () {
//   const selectedLanguage = this.value;
//   if (selectedLanguage === "da") {
//     document.querySelector(".header").textContent = "Båden";
//     document.querySelector(".footer").textContent = "Robotten";
//   } else if (selectedLanguage === "de") {
//     document.querySelector(".header").textContent = "Das Bot";
//     document.querySelector(".footer").textContent = "Das Ro-Bot";
//   }
// });

// //Løsning 2:

// // Find dropdown-menuen med id'et "language-switcher" og lyt efter, når brugeren vælger et nyt sprog
// document.getElementById("language-switcher").addEventListener("change", function () {
//   // Gem det valgte sprog fra dropdown-menuen (fx "da" eller "de")
//   const selectedLanguage = this.value;
//   // Gå igennem alle tekster, der hører til det valgte sprog
//   texts[selectedLanguage].texts.forEach(function (item) {
//     // Find det element på siden, hvor teksten skal indsættes (fx ".header" eller ".footer")
//     // Skift tekstindholdet til den nye tekst fra det valgte sprog
//     document.querySelector(item.location).textContent = item.text;
//   });
// });

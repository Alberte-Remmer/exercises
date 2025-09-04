"use strict";
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

//Løsning 2:
document.getElementById("language-switcher").addEventListener("change", function () {
  const selectedLanguage = this.value;
  texts[selectedLanguage].texts.forEach(function (item) {
    document.querySelector(item.location).textContent = item.text;
  });
});

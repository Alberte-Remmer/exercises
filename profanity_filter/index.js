"use strict";

// Original tekst med de ord, der skal skiftes ud
let str = "Programmering er sjovt! Men husk altid at bruge var, float og marquee i moderne kodning.";

// Array med dårlige og gode ord
const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

// Variabel til at holde styr på om der er klikket
let isClicked = false;

// Tilføjer en eventlistener til knappen
document.querySelector("button").addEventListener("click", function () {
  // Hvis der allerede er klikket, vis dialogboksen
  if (isClicked) {
    document.getElementById("myDialog").showModal(); // Vis dialogboks
    document.getElementById("closeDialogBtn").onclick = function () {
      document.getElementById("myDialog").close(); // Luk dialogboks
    };
  } else {
    // Udskift de dårlige ord med de gode og gør dem grønne
    let filteredStr = str;
    curseWords.forEach((word) => {
      // Erstat hvert dårligt ord med et span med klassen green
      filteredStr = filteredStr.replaceAll(word.bad, `<span class='green'>${word.good}</span>`);
    });
    // Sæt den nye tekst ind i <p>-elementet
    document.querySelector("p").innerHTML = filteredStr;
    // Sæt isClicked til true, så dialogboksen vises næste gang
    isClicked = true;
  }
});

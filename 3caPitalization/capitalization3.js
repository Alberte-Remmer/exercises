"use strict";

const name = "peter";

function capitalizeThirdLetter(name) {
  // Først tager vi de to første bogstaver og gør dem til små bogstaver
  const firstTwo = name.substring(0, 2).toLowerCase();
  // Dernæst tager vi det tredje bogstav og gør det til stort bogstav
  const third = name.substring(2, 3).toUpperCase();
  // Til sidst tager vi resten af navnet (fra fjerde bogstav og frem) og gør det til små bogstaver
  const rest = name.substring(3).toLowerCase();
  // Vi sætter delene sammen og returnerer det nye navn
  return firstTwo + third + rest;
}
// Vi kalder funktionen med navnet og viser resultatet i konsollen
console.log(capitalizeThirdLetter(name));

//forklaring:

//substring(start, end) returnerer en del af en streng fra positionen start (inkluderet) til positionen end (ekskluderet).
//I name.substring(0, 2) betyder det, at vi starter ved indeks 0 og slutter før indeks 2.
//Hvis navnet er "peter", får vi altså "pe".

//name.substring(2, 3) tager ét bogstav fra navnet, nemlig det der står på indeks 2 (det tredje bogstav, da vi starter fra 0).
//name.substring(2, 3) giver "t" (det tredje bogstav).
//"t".toUpperCase() giver "T".

//name.substring(3) tager alle bogstaver fra navnet, startende fra indeks 3 (det fjerde bogstav) og helt til slutningen af strengen.
//name.substring(3) giver "er" (de sidste to bogstaver).
//"er".toLowerCase() giver stadig "er" (fordi de allerede er små).

// Til sidst samler vi de tre variabler :
//firstTwo (de to første bogstaver, små)
//third (det tredje bogstav, stort)
//rest (resten af navnet, små)
//Vi bruger + til at sætte dem sammen til én samlet streng.
//return betyder, at funktionen sender denne nye streng tilbage som resultat.

//Andet eksempel:
const mitNavn = "Alberte";

function nytNavn(mitNavn) {
  const firstThree = mitNavn.substring(0, 3).toUpperCase();
  const middle = mitNavn.substring(3, 5).toLowerCase();
  const rest1 = mitNavn.substring(5).toUpperCase();
  return firstThree + middle + rest1;
}
console.log(nytNavn(mitNavn));

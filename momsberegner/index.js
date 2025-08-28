"use strict";

//1: Funktion med to argumenter (beloeb og moms).
// moms = 25: har jeg lavet til et default parameter, så det altid vil give 25%, hvis ikke jeg definere prametret med et tal.
function momsBeregner(beloeb, moms = 25) {
  //2: Jeg konveterer mine to argumenter og konvertere fra tekst-string til tal, så jeg kan kalde dem senere med en tekst-string
  const beloebNum = parseInt(beloeb);
  const momsNum = parseInt(moms);

  //3: Jeg laver en variabel, hvor min moms bliver udregnet til decimaltal (0.25) ved nedenstående regnestykke.
  // Jeg skriver + 1, for det er det vi gerne vil gange med altså 1.25.
  //Derfor kan jeg nu få ganget beloebet med 1.25 og få det rigtige resultat
  const resultat = beloebNum * (1 + momsNum / 100);
  console.log("Resultat", resultat);
}

//4: Derefter sender jeg "300" som beloeb, den så udregner og viser i konsollen.
momsBeregner("300"); //definerer argumenterne

"use strict";
const mitNavn = "Alberte";

function nytNavn(mitNavn) {
  const firstLetter = mitNavn.substring(0, 1).toUpperCase();
  const rest = mitNavn.substring(1).toLowerCase();
  return firstLetter + rest;
}
console.log(nytNavn(mitNavn));

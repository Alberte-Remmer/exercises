"use strict";

const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

document.querySelector("button").addEventListener("click", klik);

function klik() {
  let str = "";
  bc.forEach((elm, i) => {
    //Hvis det ikke er det sidste element
    if (i < bc.length - 1) {
      str += `<a href="${elm.link}">${elm.name}</a>`;
      // Tilføj skråstreg som tekst efter linket
      str += " / ";
    } else {
      //Hvis det er det sidste element, lav kun navnet som tekst og ikke link
      //Span er et HTML-element, der bruges til at vise tekst uden at gøre det klikbart.
      str += `<span> ${elm.name}</span>`;
    }
  });
  console.log(str);
  document.querySelector("ul").innerHTML = str;
}

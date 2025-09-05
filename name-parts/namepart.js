"use strict";

const fullName = "Alberte Kongste Remmer";

// Find fornavnet ved at tage alt før første mellemrum
const firstName = fullName.substring(0, fullName.indexOf(" "));
// Find mellemnavnet ved at tage alt mellem første og sidste mellemrum
const middleName = fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "));
// Find efternavnet ved at tage alt efter sidste mellemrum
const lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);

// Udskriv alle tre navne
console.log(firstName);
console.log(middleName);
console.log(lastName);

//Beskrivelse:
// 0 er startpositionen (altså fra begyndelsen af strengen).
//fullName.indexOf(" ") finder positionen for det første mellemrum.
//Resultatet bliver alt fra starten af strengen til lige før det første mellemrum (altså fornavnet).

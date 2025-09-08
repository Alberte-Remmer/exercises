"use strict";

document.querySelector("select").addEventListener("change", skiftFarve);

function skiftFarve() {
  const valgtTema = document.querySelector("select").value;
  document.querySelector("body").dataset.theme = valgtTema;
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

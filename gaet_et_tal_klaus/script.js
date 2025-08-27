"use strict";
//Først erklæres alle konstanter
const btn = document.querySelector("button");
const input = document.querySelector("input");
const p = document.querySelector("p");

//Generer et tilfældigt tal mellem 0-100
const computerNum = Math.floor(Math.random() * 100) + 1;

btn.addEventListener("click", klik_btn);

function klik_btn() {
  const brugerGuess = parseInt(input.value);

  console.log("computerNum", computerNum);
  console.log("brugerGuess", brugerGuess);

  let feedbackText;
  if (brugerGuess < computerNum) {
    feedbackText = "Det er for lavt prøv igen";
  } else if (brugerGuess > computernum) {
    feedbackText = "Det er for højt prøv igen";
  } else {
    feedbackText = "Det er rigtigt!!!";
  }
  p.textContent = feedbackText;

  console.log(feedbackText);
}

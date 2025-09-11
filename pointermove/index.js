"use strict";

// "mousedown"
// window.innerWidth
// style.setProperty
// clientX
// //procentregning: delen/detHele*100

document.addEventListener("mousemove", chanceColor);

function chanceColor(event) {
  // Beregn lightness som procent af vinduets bredde
  let lightness = (event.clientX / window.innerWidth) * 100;
  // Beregn saturation som procent af vinduets højde
  let saturation = (event.clientY / window.innerHeight) * 100;
  // Opdater CSS custom property for lightness
  document.documentElement.style.setProperty("--lightness", lightness + "%");
  // Opdater CSS custom property for saturation
  document.documentElement.style.setProperty("--saturation", saturation + "%");
}

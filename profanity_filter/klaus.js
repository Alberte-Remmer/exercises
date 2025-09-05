let str = "It always seems impossible until it's done";

//Splitter strengen
const strArr = str.split(" ");
console.log(strArr);

//Joiner strengen igen
console.log(strArr.join(" "));

//Joiner det på et andet ord hvis det er splittet på seems
const strArrSeems = str.split("seems");
console.log(strArrSeems.join("is"));

//nemmere måde med replace - man skifter impossible med possible
str = str.replaceAll("impossible", "possible");
str = str.replaceAll("done", "gone");
console.log(str);

//pointer til button (ikke noget med det her at gøre)
let isClicked = false;

document.querySelector("button").addEventListener("click", klik);

function klik() {
  if (isClicked === true) {
    console.log("knap klikket på");
    str1 = str1.replaceAll("var", "const");
  } else {
    console.log("Første klik");
    isClicked = true;
  }
}

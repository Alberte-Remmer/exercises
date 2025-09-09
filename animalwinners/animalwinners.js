"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];

const settings = {
  filter: null,
  sortBy: null,
  sortDir: "asc",
};

// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
  // TODO: Add winner-info
  winner: false,
};

function start() {
  console.log("ready");

  loadJSON();

  // TODO: Add event-listeners to filter and sort buttons
}

async function loadJSON() {
  const response = await fetch("animals.json");
  const jsonData = await response.json();

  // when loaded, prepare data objects
  prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
  allAnimals = jsonData.map(prepareObject);

  buildList();
}

function prepareObject(jsonObject) {
  const animal = Object.create(Animal);

  const texts = jsonObject.fullname.split(" ");
  animal.name = texts[0];
  animal.desc = texts[2];
  animal.type = texts[3];
  animal.age = jsonObject.age;

  return animal;
}

function buildList() {
  const currentList = allAnimals; // TODO: Add filter and sort on this list, before displaying
  displayList(currentList);
}

function displayList(animals) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  animals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // set clone data

  // TODO: Display winner

  // TODO: Display star

  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  //winners
  clone.querySelector("[data-field=winner]").dataset.winner = animal.winner;

  // TODO: Add event listeners for star and winner
  clone.querySelector("[data-field=winner]").addEventListener("click", clickWinner);
  function clickWinner() {
    if (animal.winner === true) {
      animal.winner = false;
    } else {
      tryToMakeAWinner(animal);
    }

    buildList();
  }

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}

function tryToMakeAWinner(selectedAnimal) {
  const winners = allAnimals.filter((animal) => animal.winner);

  const numberOfWinners = winners.length;
  const other = winners.filter((animal) => animal.type === selectedAnimal.type).shift();

  //if there is another of the same type
  if (other !== undefined) {
    console.log("There can only be one winner of each type");
    removeOther(other);
  } else if (numberOfWinners >= 2) {
    console.log("There can only be 2 winners!");
    removeAorB(winners[0], winners[1]);
  } else {
    makeWinner(selectedAnimal);
  }

  function removeOther(other) {
    //Ask the user to ignore, or remove 'other'
    document.querySelector("#onlyonekind").classList.remove("hide");
    document.querySelector("#onlyonekind .animal1").textContent = other.name + ", the " + other.type;
    document.querySelector("#onlyonekind .closebutton").addEventListener("click", closeDialog);

    document.querySelector("#onlyonekind #removeother").addEventListener("click", clickRemoveOther);

    //if ignore - do nothing ..
    function closeDialog() {
      document.querySelector("#onlyonekind").classList.add("hide");
      document.querySelector("#onlyonekind .closebutton").removeEventListener("click", closeDialog);
      document.querySelector("#onlyonekind #removeother").removeEventListener("click", clickRemoveOther);
    }

    //if remove other:
    function clickRemoveOther() {
      removeWinner(other);
      makeWinner(selectedAnimal);
      buildList();
      closeDialog();
    }
  }

  function removeAorB(winnerA, winnerB) {
    //ask the user to ignore or remove A or B
    //Ask the user to ignore, or remove 'other'
    document.querySelector("#onlytwowinners").classList.remove("hide");
    document.querySelector("#onlytwowinners .animal1").textContent = winnerA.name + ", the " + winnerA.type;
    document.querySelector("#onlytwowinners .animal2").textContent = winnerB.name + ", the " + winnerB.type;
    document.querySelector("#onlytwowinners .closebutton").addEventListener("click", closeDialog);

    document.querySelector("#onlytwowinners #removea").addEventListener("click", clickRemoveA);
    document.querySelector("#onlytwowinners #removeb").addEventListener("click", clickRemoveB);

    //if ignore - do nothing
    function closeDialog() {
      document.querySelector("#onlytwowinners").classList.add("hide");
      document.querySelector("#onlytwowinners .closebutton").removeEventListener("click", closeDialog);
      document.querySelector("#onlytwowinners #removea").removeEventListener("click", clickRemoveA);
      document.querySelector("#onlytwowinners #removeb").removeEventListener("click", clickRemoveB);
    }

    function clickRemoveA() {
      //if removeA:
      removeWinner(winnerA);
      makeWinner(selectedAnimal);
      buildList();
      closeDialog();
    }

    function clickRemoveB() {
      //else - if removeB
      removeWinner(winnerB);
      makeWinner(selectedAnimal);
      buildList();
      closeDialog();
    }
  }

  function removeWinner(winnerAnimal) {
    winnerAnimal.winner = false;
  }
  function makeWinner(animal) {
    animal.winner = true;
  }
}

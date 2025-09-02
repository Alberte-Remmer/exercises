const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");
showTheseVehicles(vehicles);

// function showTheseVehicles(arr) {
//   arr.forEach((each) => {
//     tbodyPointer.innerHTML += `<tr>
//   <td>${each.type}</td>
//   <td>${each.fuel}</td>
//   <td>${each.passengers}</td>
//   <td>${each.stops}</td>
//   <td>${each.ownedBy}</td>
//   <td>${each.isElectric}</td>
//   <td>${each.isTandem}</td>
// </tr>`;
//   });
// }

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = ""; //Tømmer tabellen inden jeg tilføjer nye rækker, så der ikke er gammelt data.
  arr.forEach((each) => {
    //Jeg starter med at lave variabler til det hele, for at kunne kontrollere, hvad der vises i tabellen for hvert felt.
    let type = ""; //Starter nu med en tom værdi
    let fuel = "";
    let passengers = "";
    let stops = "";
    let ownedBy = "";
    let isElectric = "";
    let isTandem = "";

    //If-statements:

    // Hvis der er en type, vis den. Ellers vis tomt felt.
    if (each.type) {
      //Tjekker om der findes en værdi for type
      type = each.type; //Hvis der findes en værdi, vis den
    } //Hvis ikke, forbliver 'type' en tom streng og tabellen viser et tomt felt

    // Hvis der er en brændstoftype, vis den. Ellers tomt felt.
    if (each.fuel) {
      //Tjekker om 'fuel' findes
      fuel = each.fuel; //Hvis ja, vis værdien
    } else {
      //Hvis nej, forbliver feltet tomtelse {
      fuel = "N/A"; // Viser bindestreg hvis der ikke er en type
    }

    // Hvis der er passagerer (og det ikke er undefined eller tomt), vis antallet.
    if (each.passengers !== undefined && each.passengers !== "") {
      //!== Betyder ikke lig med
      // Tjekker om 'passengers' ikke er undefined (altså at feltet findes)
      // Og at 'passengers' ikke er en tom streng (altså at der faktisk står noget)
      passengers = each.passengers; // Hvis begge betingelser er opfyldt, gemmes værdien i variablen 'passengers'
    } // Hvis ikke, forbliver 'passengers' en tom streng og tabellen viser et tomt felt

    // Hvis der er stop, vis dem som tekst. Ellers tomt felt.
    if (Array.isArray(each.stops) && each.stops.length > 0) {
      // Tjekker om 'stops' er et array (liste) Og at listen har mindst ét element
      //Array.isArray() sikrer, at jeg kun arbejder med lister og undgår fejl, hvis feltet mangler ellet andet.
      stops = each.stops.join(", "); // Hvis ja, laves listen om til en tekst med komma mellem hvert stop
    } // Hvis ikke, forbliver 'stops' en tom streng og tabellen viser et tomt felt
    else {
      //Hvis nej, forbliver feltet tomtelse {
      stops = "N/A"; // Viser bindestreg hvis der ikke er en type
    }

    // Hvis der er en ejer, vis navnet. Ellers tomt felt.
    if (each.ownedBy) {
      //Tjekker om 'ownedBy' findes
      ownedBy = each.ownedBy; //Hvis ja, vis værdien
    } //Hvis nej, forbliver feltet tomtelse
    else {
      ownedBy = "N/A"; // Viser bindestreg hvis der ikke er en type
    }

    // Hvis køretøjet er elektrisk, vis "Ja". Ellers tomt felt.
    if (each.isElectric) {
      isElectric = "Ja";
    } //hvis nej, forbliver feltet tomt
    else {
      isElectric = "N/A"; // Viser bindestreg hvis der ikke er en type
    }

    // Hvis køretøjet er tandem, vis "Ja". Ellers tomt felt.
    if (each.isTandem) {
      //tjekker om 'isTandem' findes
      isTandem = "Ja"; //Hvis ja, vis værdien
    } //Hvis nej, forbliver feltet tomt
    else {
      isTandem = "N/A"; // Viser bindestreg hvis der ikke er en type
    }

    tbodyPointer.innerHTML += `<tr>
      <td>${type}</td>
      <td>${fuel}</td>
      <td>${passengers}</td>
      <td>${stops}</td>
      <td>${ownedBy}</td>
      <td>${isElectric}</td>
      <td>${isTandem}</td>
    </tr>`;
  });
}

// 1: Alle el-drevne fartøjer:
const electricVehicles = vehicles.filter((vehicle) => vehicle.isElectric === true);

// const electricVehicles : Den nye variabel 'electricVehicles' indeholder kun de el-drevne køretøjer
// vehicles : arrayet med alle køretøjer
// .filter((vehicle) => vehicle.isElectric === true) : // Filteret går igennem alle køretøjer og vælger kun dem, hvor isElectric er true (altså el-drevne)

// 2. Alle fartøjer med mere end 2 sæder
const twoSeats = vehicles.filter((vehicle) => vehicle.passengers > 2);

// const twoSeats : Den nye variabel 'twoSeats' indeholder kun de køretøjer, der opfylder betingelsen
// vehicles : arrayet med alle køretøjer
// .filter((vehicle) => vehicle.passengers > 2) : filtrerer arrayet, så kun køretøjer med mere end 2 passagerer er tilbage

// 3. Alle el-drevne fartøjer eget af Jonas
const jonasElectricVehicles = vehicles.filter((vehicle) => vehicle.isElectric === true && vehicle.ownedBy === "Jonas");

// const jonasElectricVehicles : Den nye variabel 'jonasElectricVehicles' indeholder kun de el-drevne køretøjer, der ejes af Jonas
// vehicles : arrayet med alle køretøjer
// .filter((vehicle) => vehicle.isElectric === true && vehicle.ownedBy === "Jonas") :
// Filter går igennem alle køretøjer og vælger kun dem, hvor:
// - isElectric er true (el-drevet)
// - ownedBy er "Jonas" (ejet af Jonas)
// && kombinerer to betingelser

//4. Alle rugbrødsdrevne fartøjer med plads til mere end en
const moreThanOneRugbrod = vehicles.filter((vehicle) => vehicle.fuel === "Rugbrød" && vehicle.passengers > 1);

// const moreThanOneRugbrod : Den nye variabel 'moreThanOneRugbrod' indeholder kun de rugbrødsdrevne køretøjer med plads til mere end én passager
// vehicles : arrayet med alle køretøjer
// .filter((vehicle) => vehicle.fuel === "Rugbrød" && vehicle.passengers > 1) : filtrerer arrayet, så kun rugbrødsdrevne køretøjer med mere end én passager er tilbage
// Filteret går igennem alle køretøjer og vælger kun dem, hvor:
// - fuel er "Rugbrød" (drevet af rugbrød)
// - passengers er større end 1 (plads til mere end én)

document.getElementById("showAll").addEventListener("click", () => {
  showTheseVehicles(vehicles);
});
document.getElementById("showElectric").addEventListener("click", () => {
  showTheseVehicles(electricVehicles);
});
document.getElementById("showSeats").addEventListener("click", () => {
  showTheseVehicles(twoSeats);
});
document.getElementById("showJonasElectric").addEventListener("click", () => {
  showTheseVehicles(jonasElectricVehicles);
});
document.getElementById("showRugbrod").addEventListener("click", () => {
  showTheseVehicles(moreThanOneRugbrod);
});

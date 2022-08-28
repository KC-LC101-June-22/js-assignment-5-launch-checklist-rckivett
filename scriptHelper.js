// Write your helper functions here!
require('isomorphic-fetch');

function validateInput(input) {
    if (typeof input === "string") {
        if (input === "") {
            alert("All fields are required");
        } else {
            return "is a string"
        }
    } else if (typeof input === "number") {
        if (input === "") {
            alert("All fields are required");
        } else {
            return "is a number"
        }
    } else {
        return "Empty"
    }
}
//mission target div is missionTarget
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionPlanet = document.getElementById("missionTarget");
    missionPlanet.innerHTML =
    `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src = "${imageUrl}">
`
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) { //cargoMass was originally cargoLevel but it didn't make sense to me
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelLevelStatus = document.getElementById("fuelStatus");
    let cargoMassStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
    pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`
    copilotStatus.innerHTML = `Copilot ${copilot.value} is ready for launch`
    if (fuelLevel.value < 10000) {
        list.style.visibility = "visible";
        fuelLevelStatus.innerHTML = `Not enough fuel for the journey. Fuel levels cannot be less than 10,000 liters.`;
        launchStatus.innerHTML = `Shuttle not ready for launch`;
        launchStatus.style.color = "red";
        if (cargoMass.value > 10000){
            cargoMassStatus.innerHTML = `Too much mass for shuttle takeoff.  Mass cannot be more than 10,000 kilograms.`;
        }
    } else if (cargoMass.value > 10000) {
        list.style.visibility = "visible";
        cargoMassStatus.innerHTML = `Too much mass for shuttle takeoff.  Mass cannot be more than 10,000 kilograms.`;
        launchStatus.innerHTML = `Shuttle not ready for launch`
        launchStatus.style.color = "red";
    } else {
        list.style.visibility = "visible";
        fuelLevelStatus.innerHTML = `Fuel level high enough for launch`;
        cargoMassStatus.innerHTML = `Cargo mass low enough for launch`;
        launchStatus.innerHTML = `Shuttle is ready for launch`;
        launchStatus.style.color = "green";
    }
}
//update the shuttle requirements as described below.  Make sure to call your formSubmission() function at the appropriate time in your script.js file
async function myFetch() {
    let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json()
    });
    return planetsReturned;
}
function pickPlanet(planets) {
    let planetPicked = Math.floor(Math.random()*planets.length);
    return planets[planetPicked];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
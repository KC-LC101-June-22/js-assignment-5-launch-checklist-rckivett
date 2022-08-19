// Write your helper functions here!
require('isomorphic-fetch');

function validateInput(testInput) {
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
window.addEventListener("load", function () {
    let form = document.querySelector("form");
    form.addEventListener("submit", function () {
        let pilotNameInput = document.querySelector("input[name=pilotName]");
        let copilotNameInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoMassInput = document.querySelector("input[name=cargoMass]");
        if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput === "") {
            alert("All fields are required");
        }
    })
});

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
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

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = `Pilot ${pilot} is ready for launch!`
    let copilotListValue = `Copilot ${copilot} is ready for launch!`
    let fuelLevelMessage;
    if (Number(fuelLevel) < 10000) {
        fuelLevelMessage = `Fuel level is too low for launch.`
    } else {
        fuelLevelMessage = `Fuel level is good for launch.`
    }
    let cargoLevelMessage;
    if (Number(cargoLevel) > 10000) {
        cargoLevelMessage = `Cargo mass too high for launch.`
    } else {
        cargoLevelMessage = `Cargo mass low enough for launch.`
    }

}

//update the shuttle requirements as described below.  Make sure to call your formSubmission() function at the appropriate time in your script.js file
//document.getElementByID("")
//update id faultyItems if something is not ready for launch.  using temperate literals, update the li elements pilotStatus and copilotStatus to include the pilot's name and the co-pilot's name


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function (response) {
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;

// Write your JavaScript code here!
//const {formSubmission} = require("./scriptHelper")

window.addEventListener("load", function () {
    let form = document.querySelector("form");
    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let copilotNameInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");
    form.addEventListener("submit", function () {
        if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
            alert("All fields are required.  Pilot and Co-pilot fields should be text; Fuel Level and Cargo Mass fields should be numbers.");
        } else {
            formSubmission(form, list, pilotNameInput, copilotNameInput, fuelLevelInput, cargoLevelInput);

        }
    })
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = document.planetsReturned;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
})
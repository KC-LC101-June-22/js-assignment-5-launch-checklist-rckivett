// Write your JavaScript code here!
//const {formSubmission} = require("./scriptHelper")
//const { addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function () {
    let form = document.querySelector("form");
    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let copilotNameInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");
    let orderedList = document.getElementById("faultyItems");
    
    
    
    form.addEventListener("submit", function () {
        if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
            alert("All fields are required.  Pilot and Co-pilot fields should be text; Fuel Level and Cargo Mass fields should be numbers.");
            event.preventDefault();
        } else {
            formSubmission(window.document, orderedList, pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput);
            event.preventDefault();
        }
    })
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.    
        console.log(listedPlanets);
        let planetPicked = pickPlanet(listedPlanets);
        console.log(planetPicked);
        console.log(planetPicked.image)
        addDestinationInfo(window.document, planetPicked.name, planetPicked.diameter, planetPicked.star, planetPicked.distance, planetPicked.moons, planetPicked.image);
    })
})
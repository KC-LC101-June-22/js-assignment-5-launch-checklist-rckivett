// Write your helper functions here!
require('isomorphic-fetch');

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

function validateInput(testInput) {
//should take in a string as a parameter and return "empty", "not a number" or "is a number"  as appropriate
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   //update the shuttle requirements as described below.  Make sure to call your formSubmission() function at the appropriate time in your script.js file
   //document.getElementByID("")
   //update id faultyItems if something is not ready for launch.  using temperate literals, update the li elements pilotStatus and copilotStatus to include the pilot's name and the co-pilot's name
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
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

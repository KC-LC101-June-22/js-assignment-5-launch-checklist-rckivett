// Write your JavaScript code here!
const {formSubmission} = require("./scriptHelper")

/*let pilotName = pilotNameInput.value;
let copilotName = copilotNameInput.value;
let fuelLevel = fuelLevelInput.value;
let massKG = massKGInput.value;

console.log(pilotStatus);
console.log(copilotStatus);
*/


//the div with the Id #faultyitems should be updated if something is not ready for launch
// using template literals, update the li elements pilotStatus and copilotStatus to include the pilot's name and the co-pilot's name
//document.getElementById(pilotStatus).innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`
//document.getElementById(copilotStatus).innerHTML = `Copilot ${copilotNameInput.value} is ready for launch`
/*
<li id="pilotStatus" data-testid="pilotStatus">Pilot Ready</li>
<li id="copilotStatus" data-testid="copilotStatus">Co-pilot Ready</li>
*/


window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
});
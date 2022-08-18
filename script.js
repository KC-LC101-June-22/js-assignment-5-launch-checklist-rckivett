// Write your JavaScript code here!

window.addEventListener("load", function(){
        let form = document.querySelector("testForm");
        form.addEventListener("submit", function(event) {
            let pilotNameInput = document.querySelector("input[pilot=pilotName]");
            let copilotNameInput = document.querySelector("input[name=copilotName]");
            let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
            let cargoMassInput = document.querySelector("input[name=cargoMass]");
            if (pilotNameInput.value === ""){
                alert("All fields are required");
            }
            /*else if (pilotNameInput.value === !NaN || copilotNameInput.value === !NaN || fuelLevelInput.value === Number.isInteger || cargoMassInput === Number.isInteger){
                return;
            }*/
        })
    });

window.addEventListener("load", function() {

   let listedPlanets = planetsReturned;
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
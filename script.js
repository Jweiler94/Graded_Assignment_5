


window.addEventListener("load", function() {
    let form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let pilotNameInput = document.getElementById('pilotName').value;
        let copilotNameInput = document.getElementById('copilotName').value;
        let fuelLevelInput = document.getElementById('fuelLevel').value;
        let cargoMassInput = document.getElementById('cargoMass').value;

        formSubmission(document, "faultyItems", pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput);

    });


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
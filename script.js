const { formSubmission } = require("./scriptHelper.js");

window.addEventListener("load", function() {
    let form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();


        let pilotNameInput = document.querySelector("input[name=pilotName]");
        let copilotNameInput = document.querySelector('input[name=copilotName]');
        let fuelLevelInput = document.querySelector('input[name=fuelLevel]');
        let cargoMassInput = document.querySelector('input[name=cargoMass]');

        let items = document.getElementById('faultyItems');
        let launchStatus = document.getElementById('launchStatus');
        let fuelStatus = document.getElementById('fuelStatus');
        let cargoStatus = document.getElementById('cargoStatus');
        let ready = true;

        document.getElementsByTagName(h2).innerhtml


        //check for validity of entries below using helper functions

        if(formSubmission(document, faultyItems, pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput) === "Empty") {
            ready = false;
            items.style.visibility = 'hidden';
            
            //alert("All fields must be completed for launch!");

        } else if (formSubmission(document, faultyItems, pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput) === "Incorrect") {
            ready = false;
            items.style.visibility = 'hidden';
            alert("Incorrect entries! Pilot and Co-Pilot names must be strings! Fuel level and cargo mass must be numbers!");

        } else if (formSubmission(document, faultyItems, pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput) === "Correct") {
            //if entries valid, changes names of pilots for faultyItems
            document.getElementById('pilotStatus').innerHTML = `Pilot ${pilotName} Ready.`;
            document.getElementById('copilotStatus').innerHTML = `Co-Pilot ${copilotName} Ready.`;
           
            if( fuelLevelInput < 10000) {
                ready = false;
                items.style.visibility = 'visible';
                launchStatus.innerHTML = "Not enough fuel for launch";
                launchStatus.style.color = rgb(199, 37, 78);
                fuelStatus.innerHTML = `Fuel level is ${fuelLevelInput} liters. Must be at least 10000 to launch!`;
            } else {
                fuelStatus.innerHTML = 'Adequate fuel levels for launch.';
            }

            if( cargoMassInput > 10000) {
                ready = false;
                items.style.visibility = 'visible';
                launchStatus.innerHTML = "Shuttle not ready for launch.";
                launchStatus.style.color = rgb(199, 37, 78);
                cargoStatus.innerHTML = `Cargo mass is currently ${cargoMassInput}kg. Cargo mass must be less than 10000!`;
            } else {
                cargoStatus.innerHTML = "Acceptable Cargo Mass.";
            }
        }


        if( ready = true) {
            items.style.visibility = 'hidden';
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color =  rgb(65, 159, 106);
        }

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
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
   if(testInput === "")  {
    return "Empty";
   }  else if(typeof testInput === "number") {
    return "Is a number";
   }  else if(typeof testInput === "string") {
    return "Not a number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let formArray = [pilot, copilot, fuelLevel, cargoLevel];
   let validationArray = [];

   let i = 0;
   while (i<formArray.length) {
    validationArray.push(validateInput(formArray[i]));
    i++;
   }
   
   for ( i = 0; i < inputsArray.length; i++) {
        if ((validationArray[i]) === "Empty") {
         alert("All fields are required!");
        }
    }

    if (!validationArray[0] === "Not a number" || !validationArray[1] === "Not a number" || !validationArray[3] === "Is a number") {
        alert("Pilot and Co-Pilot names must be strings, Fuel Level and Cargo Mass must be numbers!");
    }

    

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

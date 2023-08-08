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
    document.querySelector("Name:").innerHTML = `Name: ${name}`
           
}

function validateInput(testInput) {

   if(isNaN(testInput) === false) {
    return "Is a number";
   }  else if(isNaN(testInput) === true) {
    return "Not a number";
   }
}

function formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass) {
    let items = document.getElementById(list);
    
    if( pilotName === "" || copilotName === "" || fuelLevel === "" || cargoMass === "") {
        return "Empty";

    } else if( !validateInput(pilotName) === "Not a number" || !validateInput(copilotName) === "Not a number" || !validateInput(fuelLevel) === "Is a number" || !validateInput(cargoMass) === "Is a number") {
        return "Incorrect";
    } else {
        return "Correct";
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

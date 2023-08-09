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

   if(testInput === "") {
    return "Empty";
   } else if(isNaN(testInput) === false) {
    return "Is a number";
   }  else if(isNaN(testInput) === true) {
    return "Not a number";
   }
}

function formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass) {
    let items = document.getElementById(list);
    let inputArray = [pilotName, copilotName, fuelLevel, cargoMass];
    let fuelStatus = document.getElementById('fuelStatus');
    let cargoStatus = document.getElementById('cargoStatus');
    
    let validatedArray = [];
    let ready;

    document.getElementById('pilotStatus').innerHTML = `Pilot ${pilotName} Ready.`;
    document.getElementById('copilotStatus').innerHTML = `Co-Pilot ${copilotName} Ready.`;

    let i=0;
    while (i<4) {
        validatedArray.push(validateInput(inputArray[i]));
        i++;
    }
        console.log(inputArray);
        console.log(validatedArray);

    //validate inputs using validation function results
    if(validatedArray[0] === "Empty" || validatedArray[1] === "Empty" || validatedArray[2] === "Empty" || validatedArray[3] === "Empty") {
        items.style.visibility = 'hidden';
        alert("All fields are required!");
        return false;
    } else if(validatedArray[0] === "Is a number" || validatedArray[1] === "Is a number") {
        items.style.visibility = 'hidden';
        alert("Pilot names must be words!");
        return false;
    } else if(validatedArray[2] === "Not a number" || validatedArray[3] === "Not a number") {
        items.style.visibility = 'hidden';
        alert("Fuel Level and Cargo Mass must be numbers!");
        return false;
    } else {
        
        //check fuel levels if inputs are valid
        if( fuelLevel < 10000) {
            fuelStatus.innerHTML = `Fuel level is ${document.getElementById('fuelLevel').value} liters. Must be at least 10000 to launch!`;
            items.style.visibility = 'visible';
            launchStatus.innerHTML = "Not enough fuel for launch";
            document.getElementById('launchStatus').style.color = "rgb(199, 37, 78)";
        } else {
            fuelStatus.innerHTML = 'Adequate fuel levels for launch.';
        }

         //check cargo mass if inputs are valid
        if( cargoMass > 10000) {
            items.style.visibility = 'visible';
            document.getElementById('launchStatus').innerHTML = "Shuttle not ready for launch.";
            document.getElementById('launchStatus').style.color = "rgb(199, 37, 78)";
            cargoStatus.innerHTML = `Cargo mass is currently ${document.getElementById('cargoMass').value}kg. Cargo mass must be less than 10000!`;
        } else {
            cargoStatus.innerHTML = "Acceptable Cargo Mass.";
        }

        if(cargoStatus.innerHTML === "Acceptable Cargo Mass." && fuelStatus.innerHTML === "Adequate fuel levels for launch.") {
            document.getElementById("faultyItems").style.visibility = 'hidden';
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "rgb(65, 159, 106)";
        }
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

const date = "Monday 2019-03-18";
const time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
const averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
const fuelMassKg = 760000;
const shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
const maximumMassLimit = 850000;
const fuelTempCelsius = -225;
const minimumFuelTemp = -300;
const maximumFuelTemp = -150;
const fuelLevel = 100;
let weatherStatus = "clear";
let preparedForLiftOff = true;
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7


if (astronautCount < 7)
    {
        preparedForLiftOff = true;
    }
    else
    {
        preparedForLiftOff = false;

    }




// add logic below to verify all astronauts are ready

if (astronautStatus === "ready")
    {
        preparedForLiftOff = true;
    }
    else
    {
        preparedForLiftOff = false;
    }

// add logic below to verify the total mass does not exceed the maximum limit of 850000

if (totalMassKg < maximumMassLimit)
    {
        preparedForLiftOff = true;
    }
    else
    {
        preparedForLiftOff = false;
    }
if (fuelTempCelsius > -300 || fuelTempCelsius < -150)
    {
        preparedForLiftOff = true;
    }
    else
    {
        preparedForLiftOff = false;
    }


// add logic below to verify the fuel level is at 100%

if (fuelLevel === 100)
    {
        preparedForLiftOff = true;
    }
    else
    {
        preparedForLiftOff = false;
    }

// add logic below to verify the weather status is clear

{
    if (weatherStatus === "clear")
        {
            preparedForLiftOff = true;
        }
        else
        {
            preparedForLiftOff = false;
        }
}
if (preparedForLiftOff)
    {
        console.log("All systems are a go! Initiating space shuttle launch sequence.");
        console.log("------------------------------------------------");
        console.log("Date: " + date);
        console.log("Time: " + time);
        console.log("Astronaut Count: " + astronautCount);
        console.log("Crew Mass: " + crewMassKg);
        console.log("Fuel Mass: " + fuelMassKg);
        console.log("Shuttle Mass: " + shuttleMassKg);
        console.log("Total Mass: " + totalMassKg);
        console.log("Fuel Temperature: " + fuelTempCelsius);
        console.log("Weather status: " + weatherStatus);
        console.log("--------------------------------------------------");
        console.log("Have a safe trip astronauts!");
    }

    
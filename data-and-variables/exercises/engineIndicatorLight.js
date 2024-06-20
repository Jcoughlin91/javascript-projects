let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000; // Example value
let fuelLevel = 5000; // Example value
let engineTemperature = 3000; // Example value

if (engineIndicatorLight === "green") {
    console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
    console.log("engines are preparing to start");
} else {
    console.log("engines are off");
}

if (crewStatus) {
    console.log("Crew Ready");
} else {
    console.log("Crew Not Ready");
}

if (computerStatusCode === 200) {
    console.log("Please stand by. Computer is rebooting.");
} else if (computerStatusCode === 400) {
    console.log("Success! Computer online.");
} else {
    console.log("Alert: Computer offline!");
}

if (shuttleSpeed > 17500) {
    console.log("Alert: Escape velocity reached!");
} else if (shuttleSpeed < 8000) {
    console.log("Alert: Cannot maintain orbit!");
} else {
    console.log("Stable speed");
}

if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking") {
    console.log("ENGINE FAILURE IMMINENT!");
} else if (fuelLevel <= 5000 || engineTemperature > 2500) {
    console.log("Check fuel level. Engines running hot.");
} else if (fuelLevel > 20000 && engineTemperature <= 2500) {
    console.log("Full tank. Engines good.");
} else if (fuelLevel > 10000 && engineTemperature <= 2500) {
    console.log("Fuel level above 50%. Engines good.");
} else if (fuelLevel > 5000 && engineTemperature <= 2500) {
    console.log("Fuel level above 25%. Engines good.");
} else {
    console.log("Fuel and engine status pending...");
}

let commandOverride = true; // or false

if (commandOverride === false) {
    if (fuelLevel > 20000 && engineIndicatorLight !== "red blinking") {
        console.log("Cleared to launch!");
    } else {
        console.log("Launch scrubbed!");
    }
} else {
    console.log("Cleared to launch!");
}


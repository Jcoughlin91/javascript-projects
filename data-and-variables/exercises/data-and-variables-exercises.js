// Declare and assign the variables below
let shuttleName = "Determination";
let shuttleSpeed = 17500; // in mph
let distanceToMars = 225000000; // in km
let distanceToMoon = 384400; // in km
let milesPerKilometer = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName); // string
console.log(typeof shuttleSpeed); // number
console.log(typeof distanceToMars); // number
console.log(typeof distanceToMoon); // number
console.log(typeof milesPerKilometer); // number

// Calculate a space mission below
let milesToMars = distanceToMars * milesPerKilometer;
let hoursToMars = milesToMars / shuttleSpeed;
let daysToMars = hoursToMars / 24;

console.log(`${shuttleName} will take ${daysToMars.toFixed(2)} days to reach Mars.`);

// Print the results of the space mission calculations below
// (Already done above)

// Calculate a trip to the moon below
let milesToMoon = distanceToMoon * milesPerKilometer;
let hoursToMoon = milesToMoon / shuttleSpeed;
let daysToMoon = hoursToMoon / 24;

console.log(`${shuttleName} will take ${daysToMoon.toFixed(2)} days to reach the Moon.`);


// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below
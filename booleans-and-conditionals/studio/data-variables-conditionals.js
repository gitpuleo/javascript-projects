// Initialize Variables below
date = "Monday 2019-03-18"
time = "10:05:34 AM"
astronautCount = 7
astronautStatus = "ready"
averageAstronautMassKg = 80.7
crewMassKg = (astronautCount * averageAstronautMassKg);
fuelMassKg = 760000
shuttleMassKg = 74842.31
totalMassKg = (crewMassKg + fuelMassKg + shuttleMassKg);
maximumMassLimit = 850000
fuelTempCelsius = -225
minimumFuelTemp = -300
maximumFuleTemp = -150
fuelLevel = "100%"
weatherStatus = "clear"
preparedForLeftOff = true

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

// add logic below to verify all astronauts are ready

// add logic below to verify the total mass does not exceed the maximum limit of 850000

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

// add logic below to verify the fuel level is at 100%

// add logic below to verify the weather status is clear

// Verify shuttle launch can proceed based on above conditions

if (astronautCount <7) {
    if (astronautStatus = "ready") {
        if (totalMassKg < maximumMassLimit) {
            if (fuelTempCelsius >= -300 || fuelTempCelsius <= -150) {
                if (fuelLevel = "100%") {
                    if (weatherStatus = "clear")
                        console.log("Cleared for lift-off.")
                }
            }
        }
    }
} else {
    console.log("Abort mission.")
}
console.log("Status:");
console.log("Date: " + date);
console.log("Time " + time);
console.log("Astronaut Count " + astronautCount);
console.log("Crew Mass: " + crewMassKg);
console.log("Fuel Mass: " + fuelMassKg);
console.log("Shuttle Mass: " + shuttleMassKg);
console.log("Total Mass: " + totalMassKg);
console.log("Fuel Temperature: " + fuelTempCelsius + "C");
console.log("Weather Status: " + weatherStatus);
console.log("Have a safe trip!");


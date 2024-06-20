const input = require('readline-sync');

let name = input.question("Enter your name here: ");
console.log("Hello, " + name + "!");
//last nmae next line
let lastName = input.question("Your last Name? ");
console.log("Hello there, " + name + " " + lastName + " its nice to meet you!");


const readline = require("readline-sync");

let name = readline.question("Enter your name: ");
console.log(`My name is ${name}`);

let age = readline.questionInt("Enter your age: ");
console.log(`My age is ${age}`);

let email = readline.questionEMail("Enter your email: ");
console.log(`My email is ${email}`);

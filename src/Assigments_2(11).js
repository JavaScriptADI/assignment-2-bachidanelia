// 11. Find and fix the error in the following code:

let age = prompt('How old are you?');

//let nextAge = age + 1; // age needs to be converted to numbers.
let nextAge = Number(age) + 1;

console.log(`Next year you will be ${nextAge}`);
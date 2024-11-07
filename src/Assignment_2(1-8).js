// 1. Declare a variable and assign a string as a value. 
// Make sure the string is at least 6 characters long. Print the variable to the console.


let customerName = "Bob";

console.log(`Type of value is: ${typeof(customerName)}`)
console.log(customerName);


// 2. What is the difference between "5" and 5?

let firstType = "5";

let seconType = 5;

console.log(`First type of value is: "${firstType}" - ${typeof(firstType)},
Second type of value is: ${seconType} - ${typeof(seconType)}`);


// 3. Declare a variable and assign a number as a value.
// Make sure the number is greater than 9. Print the variable to the console.

let customerAge = 25;

console.log(`Type of value is: ${typeof(customerAge)}`)
console.log(customerAge);

// 4. Declare a variable and assign a boolean as a value. Print the variable to the console.

let isItRaining = false;

console.log(`Type of value is: ${typeof(isItRaining)}`)
console.log(isItRaining);

// 5. What operators give us a boolean result?

const firstCarMpg = 50;
const secondCarMpg = 30;

let moreEfficient = firstCarMpg < secondCarMpg;

console.log(`First car's MPG is ${firstCarMpg}, 
Second car's MPG is ${secondCarMpg}`);

console.log(`Is first car more efficient: ${moreEfficient}`);

// 6. Declare a variable with the value of "Hello".
// Covert the value to upper case and print the converted value to the console.

let newWrod = "Hello"

console.log(newWrod);

const makeUpperCase = newWrod.toUpperCase();

console.log(makeUpperCase);

// 7. Declare another variable with the value of "World".
// Convert the value to lower case and print the converted value to the console.

let muchNewerWord = "Word";

console.log(muchNewerWord);

const makeLowerCase = muchNewerWord.toLowerCase();

console.log(makeLowerCase);

// 8. What is the value of the variable text before and after the method is called?

let text = 'Hello';
text.toUpperCase();
console.log(text); // values stays the same, because "text" is not updaited.

// text = text.toUpperCase(); // to change value to uppercases.
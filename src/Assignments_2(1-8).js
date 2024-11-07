// 1. Declare a variable and assign a string as a value. 
// Make sure the string is at least 6 characters long. Print the variable to the console.


let customerName = "Bob";

console.log(`Type of value is: ${typeof(customerName)}`) // Type of value is: string
console.log(customerName); // Bob


// 2. What is the difference between "5" and 5?

let firstType = "5";

let seconType = 5;

console.log(`First type of value is: "${firstType}" - ${typeof(firstType)},
Second type of value is: ${seconType} - ${typeof(seconType)}`); //First type of value is: "5" - string,
                                                                //Second type of value is: 5 - number


// 3. Declare a variable and assign a number as a value.
// Make sure the number is greater than 9. Print the variable to the console.

let customerAge = 25;

console.log(`Type of value is: ${typeof(customerAge)}`) // Type of value is: number
console.log(customerAge); // 25

// 4. Declare a variable and assign a boolean as a value. Print the variable to the console.

let isItRaining = false;

console.log(`Type of value is: ${typeof(isItRaining)}`) // Type of value is: boolean
console.log(isItRaining); // false

// 5. What operators give us a boolean result?

const firstCarMpg = 50;
const secondCarMpg = 30;

let moreEfficient = firstCarMpg < secondCarMpg;

console.log(`First car's MPG is ${firstCarMpg}, 
Second car's MPG is ${secondCarMpg}`); // First car's MPG is 50, 
                                       // Second car's MPG is 30

console.log(`Is first car more efficient: ${moreEfficient}`); // Is first car more efficient: false

// 6. Declare a variable with the value of "Hello".
// Covert the value to upper case and print the converted value to the console.

let newWrod = "Hello"

console.log(newWrod); // Hello

const makeUpperCase = newWrod.toUpperCase();

console.log(makeUpperCase); // HELLO

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

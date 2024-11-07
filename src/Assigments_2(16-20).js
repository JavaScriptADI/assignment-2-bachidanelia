// 16. What is the difference between ++x and x++?

let x = 20;

console.log(x++); // 20
//in this case we woun't see changes imedietly, only in next log

console.log(++x); // 22
//we will be able to see changes right away, no need to wait for next log


// 17. If we try to declare variable without any value, 
// what will be the value of the variable in the console?

let johnDoe;

console.log(johnDoe); // undefined.


// 18. Show the example of equality operator.

let myAge = 30;

let numberOfHairOnMyHead = 30;

let areTheyEqual = (myAge == numberOfHairOnMyHead);

console.log(areTheyEqual); // true


// 19. Show the example of not equal operator.

let normalIq = 100;

let govOfficials = 41;

let doWeNeedToWorry = (normalIq !== govOfficials);

console.log(doWeNeedToWorry); // true


// 20. What's going on when we try to add string and number?

let string = "20";

let number = 10;

console.log(string + number); // 2010
// it's not gonna work unless we interfere

let stringsPlusNumbers = Number(string) + number;

console.log(stringsPlusNumbers); // 30
// <<<<<<< HEAD
// let score = 33
// =======
// let score = "33abh" // if we take "null" then we get 0 in (valueInNumber), 
// //and also if we take "undefined" then we get "nan" 
// >>>>>>> 74755d6baa7a5a07c237e4017c0838d9004e8e3e

// <<<<<<< HEAD
// console.log(typeof score);
// =======
// // console.log(typeof score);

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abv" => nan not a number
// true => 1
// false => 0

let isLoggedIn = "0"
let valueInBoolean = Boolean(isLoggedIn);
//console.log(valueInBoolean);

//1 => true; 0=> false
// "" => false
// "anmol" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log( stringNumber);
// console.log(typeof stringNumber);


// ++++++++++++++++++++++++++++  operations +++++++++++++++++++++++++++++++++++++++++++++++++

let value = 3
let negValue = -value
//console.log(negValue);



// console.log(2-2);   // subtraction
// console.log(2+2);  // addition
// console.log(2+2);  // multiplication
// console.log(2**2); //power
// console.log(2/2); //division
// console.log(2%2); //remainder
 

let str1 = "hello"
let str2 = " Anmol"
let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log((3+4)*5%3);

console.log(+true);
console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2+2


let gameCounter = 100
gameCounter++;//prefix and postfix counter => ++abc   , abc++
console.log(gameCounter)
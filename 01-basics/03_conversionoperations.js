let score = "33abh" // if we take "null" then we get 0 in (valueInNumber), 
//and also if we take "undefined" then we get "nan" 

console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abv" => nan not a number
// true => 1
// false => 0

let isLoggedIn = "0"
let valueInBoolean = Boolean(isLoggedIn);
console.log(valueInBoolean);

//1 => true; 0=> false
// "" => false
// "anmol" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log( stringNumber);
console.log(typeof stringNumber);
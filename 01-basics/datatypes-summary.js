       // DATATYPES //
// # 1 . Primitive Datatypes

// (call by values)

// 7Types : String, Number , Boolean , Null , Undefined , Symbol, BigInt

// javascript is a dynamic langauage

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let useremail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 1234234252345345n // bigInt


// 2 . Refrence Datatypes (Non Primitive)

// ARRAY, OBJECTS, Functions 
const heros = ["shaktiman", "anmol"]; // array


let myObj = {
    name: "anmol",
    age : 19
}  //// object

const myFunction = function(){
    console.log("hello");
}

console.log(typeof heros);

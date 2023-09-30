const score = 400
//console.log(score);

const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString());// here the number has become a string
// console.log(balance.toString().length);// here the number has become a string and we can find the length of alphatbets
// console.log(balance.toFixed(2)); // used in gst for e-commerce platforms.

const otherNumber = 23.8966

//console.log(otherNumber.toPrecision(2)); // always returns string only gives precise values

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN')); // for giving or finding how many zeros are there or make them in precise form.


// +++++++++++++++++++++++++++ maths +++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));// it converts subtration to addition only 
// console.log(Math.round(4.6));// it gives round off of the number
// console.log(Math.ceil(4.2)); // it will give everytime upper number
// console.log(Math.floor(4.9)); // it will always give lower number
// console.log(Math.min(4,3,5,6)); // it will always give lower number
// console.log(Math.max(4,3,5,6)); // it will always give lower number

console.log(Math.random());
console.log(Math.random()*10)+1;
console.log(Math.floor(Math.random()*10))+1;

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min);

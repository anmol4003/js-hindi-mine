const name = "anmol"
const repoCount = 50

// console.log(name + repoCount + "value");

console.log(`hello my name is ${name} amd my repo count is ${repoCount}` );  //string inturplitation

const gameName = new String('anmol-av') 


console.log(gameName[0]);
console.log(gameName.__proto__);  //typeof 

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('m'));  // for finding postion of character with alphabets
console.log(gameName.charAt('2')); // for finding postion of character with numbers

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice (-7,4);
console.log(anotherString);

const newStringOne = "   anmol    "
console.log(newStringOne);
console.log(newStringOne.trim()); // it trims the extra space

const url = "https://search.yahoo.com/anmol%20verma"
console.log(url.replace('%20','-')) // replace
console.log(url.includes('anmol')) // true or false
console.log(gameName.split('-')) 

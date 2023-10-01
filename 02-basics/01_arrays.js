// array

const myArr = [1,2,3,4,5] //we can also write string or anything it will become a number.
const myHeroes = ["shaktiman" , "naagraj" ]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[2]);

// Array methods

// myArr.push(4) // to add new values in arrays
// myArr.pop() // to remove last value in array

// // myArr.unshift(9) //it add values in starting of arrays
// myArr.shift() //it removes the starting values of arrays

// console.log(myArr.includes(9)); //output in boolean
// console.log(myArr.indexOf(9)); // gives index number of the array and if there is no related no. then it will give -1

// const newArr = myArr.join() //it converts the array into strings

// console.log(myArr);
// console.log(newArr); 


// slice , splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3) // it gives all the numbers which you mark index except the last one 

console.log(myn1);
console.log("B", myArr);
console.log(myn1);

const myn2 = myArr.splice(1,3) // it removes the array which you marks the index  in equation from the original array.
console.log("C", myArr) ;
console.log(myn2); 
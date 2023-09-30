let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)
//let myCreatedDate = new Date(2023, 0, 23,5,3)
// let myCreatedDate = new Date("2023-01-14")// yyyy-mm-dd
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); //gives values in miliseconds
// console.log(Math.floor(Date.now()/1000)); // by dividing by 1000 it gives in seconds

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());
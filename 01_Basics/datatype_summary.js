/*  Primitive Datatypes (by value) 7 types 
    String, Numbers, Boolean, null, undefined, symbol, BigInt
*/

const score = 100
const scoreValue = 100.1
const isLoggedIn = false
const outsideTemp = null
let Email;
const Id = Symbol('654')
const anotherId = Symbol('654')
// console.log(Id === anotherId);

const bigNumber = 36547575687534755n
// console.log(bigNumber);


/*  Reference Datatype (Non Primitive)
    Array[], Objects{}, Functions()
*/

const heroes = ["Garp", "Koby", "Shanks", "Ichigo"]
let myObj = {
    Name: "Aniket",
    age: 20,
    gender: "male"
}

const myFunction = function () {
    // console.log("Hello World");
}

// console.log(typeof myFunction);

// ********************************** Memory allocation *****************************************

// Stack (Primitive) and Heap (Non - Primitive)

let YouTubeName = "ASGR ANiket"
let anotherName = YouTubeName
anotherName = "ASGR EDits"

// console.log(YouTubeName);
// console.log(anotherName);

// Example of Heap memory

let userOne = {
    name: "Aniket",
    userEmail: "ANiket123@gmail.com",
    UPI: "asdfd@ybl"
}
let userTwo = userOne
userTwo.userEmail = "asgredits@gmail.com"

console.log(userOne.userEmail);
console.log(userTwo.userEmail);

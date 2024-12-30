// array 

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["MonkeyDLuffy", "Father"]

// console.log(myArr[2]);
// console.log(myHeroes[1]);

// const myArr2 = new Array (0, 1, 2, 4, 3)
// console.log(myArr[1]);

// Array methods

// myArr.push(10)    // adds value 10 at last index of array 
// myArr.push(7)    // adds value 7 at last index of array 
// myArr.pop()      // last digit will be removed 
// console.log(myArr);

// myArr.unshift(8)     // adds value to the starting index
// myArr.shift()       // removes value to the starting index
// console.log(myArr);  // Here removes 0 from 0th index

// console.log(myArr.includes(5));   // checks existence of a element (values)
// console.log(myArr.indexOf(4));   // checks the value of a index 

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);


// slice and splice

console.log("A ", myArr);

const myNewArr = myArr.slice(1,5) // value to remove from, value remove but don't include
console.log(myNewArr);

// slice returns a new array and original value remains unchanged.
// Used when you need to extract a portion of an array without modifying it

console.log("B ", myArr);
const myNewArr2 = myArr.splice(1, 5) // Deletes all the elements in the range including the last digit

// splice returns a new array with deleted one and original value changed.
// Use when you need to add, remove, or replace elements within an array 

console.log("C ", myArr);
console.log(myNewArr2);


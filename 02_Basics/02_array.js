// More inside of Array

const marvelHeroes = ["IronMAn", "Thor", "Spiderman"]
const dc_heroes =["Batman", "Superman", "Aquaman"]

// marvelHeroes.push(dc_heroes)
// console.log(marvelHeroes[3][1]);

// concat add array's value inside a array without square brackets

// marvelHeroes.concat(dc_heroes) // combines two or more array returns a new array
// console.log(marvelHeroes);

// const allHeroes = marvelHeroes.concat(dc_heroes) 
// console.log(allHeroes);

// const allNewHeroes = [...marvelHeroes, ...dc_heroes] // for multiple array merging
// console.log(allNewHeroes); // same output as concat here

// const anotherArray = [1, 2, 3, [4, 5, 6], 7,[[8, 9], 5], 7]

// const usableAnotherArray = anotherArray.flat(Infinity) 
// // concatenates all sub-arrays into a single array, depths determines the layers to perform the method(array inside arrays layer by layer)
// console.log(usableAnotherArray);

console.log(Array.isArray("Aniket"));
console.log(Array.from("Aniket"));
console.log(Array.from({name: "Aniket"})); // Interseting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2,score3));

const name = "Aniket"
const repoCount = 5

// console.log(name + repoCount + "value"); Old fashioned

// console.log(`My name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String ('aniketfc')

// console.log(gameName [0]);

// console.log (gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.charAt (4));
// console.log(gameName.indexOf ('e'));
// console.log(gameName.toUpperCase());
// console.log(gameName.toLocaleUpperCase());

let myName = new String ("    Aniket   ")
// console.log(myName.trimStart());
// console.log(myName.trimEnd());
// console.log(myName.trim());
myName = "Aniket%20Asgr    "
// console.log(myName.replace("%20", " "));
const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 7);
console.log(anotherString);

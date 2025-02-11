// var c = 309
let a = 100

if(true){
    let a = 10
    const b = 20
    var c = 30
}

if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a)  // shows the value of a inside the scope
}

console.log(a); // value of a doesn't update as it as it was declared outside the scope and also let keyword is used
// console.log(b);
// console.log(c); // c does not affect even being inside scope 

function one (){
    const username = "Aniket"

    function two (){
        const webstite = "github"
        console.log(username);
    }
    // console.log(website) // error as it can't access a variable decalred inside scope (variable and same goes for objects, arrays etc)

    two() 
}

// one()

// Elder / bigger scope can't access inside scope's value in any form but inside or smaller scope can access outside scopes

if (true) {
    const username = "Shamrock"
    if (username === "Shamrock") {
        const website = " Slack"
        console.log(username + website);
    }
    // console.log(website); // error outside scope
}

// console.log(username); // error again variable exist inside the scope and print statement is declared inside the scope

// ++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++


console.log(addone(6));
function addone(num){
    return num + 1
}

// addTwo(6) // shows error because of hoisting as we also hold it in variable along with declaring the function

const addTwo = function (num) {  // 2nd way to declare a function in javascript
    return num + 2
}

addTwo(3)


// singleton - constructor 
// object.create

// object literals 

const mySym = Symbol("key1")

const JsUser = {
    name: "Aniket",  // we can define keys in objects 
    age: 20,
    location: "Ahmedabad", 
    [mySym]: "mykey1",
    email: "aniketribadiya@google.com",
    isLoggedIn: true,
    lastloginDay: ["Monady", "Saturday"]
}

// myArray = ["A", "n"] // in arrays there is predefined key starting form 0 to n

// console.log(JsUser.email);
// console.log(JsUser["age"]);
// console.log(JsUser["name"]);
// console.log(JsUser.mySym);
// console.log(JsUser[mySym]);

JsUser.email = "aniket123@gmail.com"
Object.freeze(JsUser)   // no changes or updates can be done after implementation of freeze
JsUser.email = "aniket123chatgpt.com"
console.log(JsUser["email"]);

JsUser.greeting = function() {
    console.log("Hello JS user");
}
    JsUser.greeting()

JsUser.greetingtwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greetingtwo());

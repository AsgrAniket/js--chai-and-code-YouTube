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
    lastloginDay: ["Monady", "Saturday"]
}

// myArray = ["A", "n"] // in arrays there is predefined key starting form 0 to n

console.log(JsUser.email);
console.log(JsUser["age"]);
console.log(JsUser["name"]);
console.log(typeof JsUser.mySym);
console.log(JsUser[mySym]);
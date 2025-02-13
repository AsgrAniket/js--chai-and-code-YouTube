const user = {
    username: "Aniket",
    price: 990,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // Shows current context
    }

}

// user.welcomeMessage()
// user.username = "Shanks"
// user.welcomeMessage()

console.log(this); // empty object 

// ++++++++++++++++++++++++++++ Arrow ++++++++++++++++++++++++++=

function Asgr(){
    let username = "Garling"
    console.log(this.username); // undefined only works in function
}

Asgr()

const AsgrAniket = (num1, num2) => (num1 + num2) // return keyword not require as we use paraenthesis here means implicit return

console.log(AsgrAniket(3, 7));

const Asgr2 = (num1, num2) => ({username: "Aniket"})
console.log(Asgr2(3, 4));

// const myArray = [1, 3, 4, 5, 6]
// myArray = .array.forEach(() => {})
// const tinder = new object ()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Google"
tinderUser.isloggedIn = false 

// console.log(tinderUser);

const regularUser = {
    email:  "random@gmail.com",
    fullName: {
        userName: {
            firstName: "Aniket",
            lastName: "Ribadiya"
        }
    }
}

// console.log(regularUser.fullName.userName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = Object.assign({}, obj1, obj2, obj4) // target and source
// console.log(obj3);

const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const users = [
    {

    },
    {

    },
    {
        id: 1334,
        email: "aniket123@gmail.com"
    },
    {
        id: 1334,
        email: "aniket123@gmail.com"
    },
    {
        id: 1334,
        email: "aniket123@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // both key and value pairs 

// console.log(tinderUser.hasOwnProperty("isLogged")); // Checks the property's existence 

// Singleton using constructor

const course = {
    coursename: "js in English",
    price: "999",
    courseInstructor: "Aniket"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);

console.log(instructor);

const navbar = () => {


}

navbar()
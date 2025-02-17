// Immediately invoked Function Expressions (IFFE)

(function Asgr (){
    // named IIFE
    console.log(`DB CONNECTED`); // To neglect global scope variable conflict  we used paraenthesis
}); // semi colon for multiple usage of IIFE to end previous IIFE


(function Aniket() {
    console.log(`DB CONNECTED TWICE`);
})();

( (name) => {
    console.log(`DB CONNECTED THRICE ${name}`);
} ) (`Aniket`)
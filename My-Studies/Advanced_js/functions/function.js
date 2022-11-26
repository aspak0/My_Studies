// Function Statement :)
function normalFunc() {
  console.log("This is a Normal Function");
}
normalFunc();

// Function Expression :)
// during hoisting this will be Error
let expressionFunc = function () {
  console.log("This is a Function Expression");
};
expressionFunc();

// Function Declaration :)
/*
Function statement and Function Declaration are same.
*/

// Anonymous Function :)
/*
function() {
    // Function Body
 }
 // Arrow Anonymous
 ( () => {
    // Function Body...
} )();
 */
let AnonymousFunc = (anonymous) => {
  console.log(anonymous); //anonymous function
};
AnonymousFunc(() => {});

// Named Function Expression :)
let namedFunc = function expression() {
  console.log("This is a Named Function expression");
};
namedFunc();
// expression() //This is a error

// Diffrence Between Parameter & Argument :)
// a,b parameter
function paramArgue(a, b) {
  console.log(a, b);
}
paramArgue("hello", "Ash"); // Arguments

// First class Functions :)
// Ability to used like values.
let fcFunc = function firstClass() {
  return function example() {};
};
console.log(fcFunc());

// Arrow Functions :)
const ArrowFunc = () => {
  console.log("This is a Arrow Functions");
};
ArrowFunc();

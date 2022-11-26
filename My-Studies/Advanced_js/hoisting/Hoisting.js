//function hoisting Methods

hoisting(3, 2); // this is hoisting

function hoisting(a, b) {
  console.log(a + b);
}

/*
// Arrow Functions are not working hoisting method (let, const are not hoistable);
error(2, 2);
const error = (a, b) => {
  console.log(a + b);
};
//outPut:- Cannot access 'error' before initialization
*/

//* Variable Hoisting
//correct method
a = 10;
console.log(a);
var a;

//let and const are not hoistable
c = 30;
console.log(c);
let c;
// Cannot access 'c' before initialization

// errors
console.log(e);
var e = 20;
// undefined
 
// closure is a function bundled together lexical environment
function example() {
  let a = 10;
  function insideFun() {
    console.log(a); // inside lexical scope
  }
  a = 100;
  return insideFun;
}
const ans = example();
console.log(ans); // [Function: insideFun]
ans(); //100

// Normal Closure :)

let myName = "aspak"; //global variable

function printName() {
  console.log(myName); //inside scope
}
myName = "cod3r.ash";
printName();
myName = "ash";
printName();

// Function inside function :)

function outerFunc(outerVar) {
  const outerVar2 = "Hello,";
  return function innerFunc(innerVar) {
    console.log(`Outer Variable-> ${outerVar}`);
    console.log(`Inner Variable-> ${innerVar}`);
    console.log(`Outer Variable2 -> ${outerVar2}`);
  };
}

const result = outerFunc("Out Side");
result("Inside");
// console.log(outerVar); // ReferenceError: outerVar is not defined

/*
// Closure Fetch and then :)

function fetchClosure(url) {
  fetch(url).then(() => {
    console.log(url);
  });
}
const answer = fetchClosure("outerFetch");
answer("innerFetch");
*/


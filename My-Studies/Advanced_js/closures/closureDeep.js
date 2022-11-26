/*
// Uses of Closures :)
-> Module Design pattern
-> Currying
-> Function Like Once
-> Memoize
-> Maintaing state in async World
-> setTimeOuts
-> Iterators
-> And many more
*/
//Example-1 :)
function setTime() {
  let ex = 10;
  setTimeout(function () {
    console.log(ex); // after 3sec this code will be execute
  }, 3000);
  console.log("Hello, Ash."); // this code is running first
}
setTime();

//Example-2 :) -> without closure
function errorTime() {
  //var using it is error;
  //let is block scope
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("hi, Google!");
}
errorTime();

//Same with closure :)
//Example-2 :)
function errorTime1() {
  for (let i = 1; i <= 5; i++) {
    function newCopy(j) {
      setTimeout(function () {
        console.log(j);
      }, j * 1000);
    }
    newCopy(i);
  }
  console.log("hello, Google!");
}
errorTime1();

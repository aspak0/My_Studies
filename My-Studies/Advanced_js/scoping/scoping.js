/*
//Scope Works
const a = 10;

function scope() {
  const b = 5;
  console.log("inside scope", a, b); // inside scope 10 5
}
scope();
console.log("out side scope", a, b); // b is not defined
*/

console.log(globalVar); // global

import { ExportedVar } from "./moduleScope.js";
console.log(ExportedVar); // Exported-Module

console.log(moduleVar); // ReferenceError: moduleVar is not defined

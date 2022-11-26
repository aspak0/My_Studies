import User, { printName as printUserName, printAge } from "./es6User.js";

const user = new User("aspak", 25);
console.log(user);

printUserName(user);
printAge(user);

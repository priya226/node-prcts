"use strict";
//arguments is a special object in JavaScript that represents the arguments passed to a function
// console.log(arguments);
console.log(require("module").wrapper);
const path = require("path");
const currentDir = __dirname;
// Go one folder back
const parentDir = path.resolve(currentDir, "..");

const c = require(`${parentDir}/modules/test-module-calc`);
const calc1 = new c();
console.log(calc1.add(2, 3));

const calc2 = require(`${parentDir}/modules/test-module`); //exports object as no class define there
console.log(calc2.multiply(2, 3));

///we can use mobject destructring since we getting object here
const { add, multiply, subtract } = require(`${parentDir}/modules/test-module`);
console.log(subtract(3, 2));

//caching
//console on file will be seen only once as this file got cached and only fn call gives value
require(`${parentDir}/modules/test-module-caching`)();
require(`${parentDir}/modules/test-module-caching`)();
require(`${parentDir}/modules/test-module-caching`)();

console.log("Hello CodeSandbox");
console.log("hello world");
// console.log(d); // this will give error but 1st line will execute partial run interepreted
let number = 5;
number = "hellow"; // the datatype altered - error prone hence came typescript for strict sytanx, allows error catch more effeciently

// js single threaded hence it is not recommended fr scaling
// though we can make concurrent using libuv

let x1 = 10; // Primitive number stored in stack
var y = "Hello"; // Primitive string stored in stack
let obj = { name: "Alice" }; // Object reference stored in stack, object itself stored in heap

//// let can be seen in script scope if they are defined globally not inside fn
//// var declarations in the global scope become properties of the global object
//// var has fn scope let and const has block scope

/////Primitives are immutable
// Reassignment involves changing the reference of a variable to a new value or object.
let person = { name: "Alice" };
person = { name: "Bob" }; // This is reassignment, as 'person' now references a completely new object.

let x = 42; //first declare x and assign it the value 42, the value 42 is stored directly in stack memory.
//The variable x holds a reference to this value.
x = "hellow"; //The string "Hi" is now stored in stack memory, and x is updated to reference this new value.

//The value 42 remains in stack memory until the stack frame is cleared
// If there are no other references to 42, it may become eligible for garbage collection.
let y1 = 42; // will point to same stack memory
let z = "hellow"; // In most cases, x and y will both point to the same memory location where the string "hellow"
//is stored due to string interning.

// Reassignment involves changing the reference of a variable to a new value or object.
//Reassignment of const is not allowed in js
const a = 1;
// a = 2; //gives error TypeError: Assignment to constant variable.
// const count; // Error: Missing initializer in const declaration.
const person2 = { name: "Alice" };
// person2 = { name: "Bob" }; //error TypeError: Assignment to constant variable.

// Mutability involves modifying the properties or
// contents of an existing object
//  without changing its reference.
const ab = {
  name: "name",
};
ab.b = "b";
console.log(ab);
const arr = [1, 3, 7];
arr.push(5);
console.log(arr);

// Make the object immutable
Object.freeze(ab);
ab.name = "Bob";
// This will not change the object since it's frozen neither give error
console.log(ab.name);

function f() {
  console.log(h); //undefined : var declared and initialised with undefined due to hoisting
  console.log(g); // not available -  let declare but not initialised : temporal deadzone
  var h = 100;
  let g = 10;
  console.log(g);
  return h; //returns data but no return type mention req in js but ts and java does
}

let data = f();

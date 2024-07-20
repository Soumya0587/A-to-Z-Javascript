console.log("hello");
let city  = "kolkata"
const name1  = "soumalya"
let age  = 28

console.table([city,name1,age]);


/*
Scope: Function-scoped. This means that a variable declared with var is accessible within the function it is declared in, or globally if declared outside of any function.
Hoisting: Variables declared with var are hoisted to the top of their scope. This means the variable declaration is processed before any code is executed, but not the initialization.
Re-declaration: A var variable can be re-declared within its scope.
*/

function exampleVar() {

    if (true) {
      var name2 = "Jane"; // same `name2` variable, re-declared
      console.log(name2); // Output: Jane
    }
    console.log(name2); // Output: Jane
  }
  
  exampleVar();


/*
Scope: Block-scoped. This means that a variable declared with let is only accessible within the block it is declared in (e.g., inside an if statement, loop, or function).
Hoisting: Variables declared with let are also hoisted, but they are not initialized. Accessing them before their declaration results in a ReferenceError.
Re-declaration: A let variable cannot be re-declared within the same block scope.
*/

function exampleLet() {
    let name = "John";
    if (true) {
      let name = "Jane"; // different `name` variable, block-scoped
      console.log(name); // Output: Jane
    }
    console.log(name); // Output: John
  }
  
  exampleLet();

  
/*
Scope: Block-scoped, similar to let.
Hoisting: Variables declared with const are hoisted but not initialized.
Re-declaration: A const variable cannot be re-declared within the same block scope.
Immutability: A const variable must be initialized at the time of declaration, and its value cannot be reassigned. However, if the const variable is an object or array, its properties or elements can be modified.
*/
  

function exampleConst() {
    const name = "John";
    // name = "Jane"; // This will throw an error
    if (true) {
      const name = "Jane"; // different `name` variable, block-scoped
      console.log(name); // Output: Jane
    }
    console.log(name); // Output: John
  }
  
  exampleConst();
  
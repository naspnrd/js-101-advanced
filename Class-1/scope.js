// Scope -> means where you can access a specific variables, funcs and objects in the code

// outer scope ie global scope or parent scope
// function abc() {
//   // local scope
//   console.log("print b --", b); // 5
// }

// // var b = 5;
// /*
// comment multiple line
// */

// abc();

// example

// scope chain -> checking of scopes and finding the variable is something called as
// scope chain

// parent code ie global scope
// function abc() {
//   // parent scope
//   function c() {
//     // local scope
//     console.log("pzrint b --", b);
//   }
//   c();
// }

// var b = 5;

// abc();

// lexical Environment/scoping
// A lexical env is a DS that holds identifier-varibale mapping(here identifier refers to
// then name of func/variable and the variable is the reference to the actual object)
// when ever a new execution context (EC) is created a new lexical env is created and
// in layman terms it is referenced to local Execution Context in memory space
// or, in simple terms
// Lexical Env => local memory + lexical env of it's parent

// function abc() {
//   function c() {
//     console.log("pzrint b --", b);
//   }
//   c();
// }

// var b = 5;

// abc();

// global scope

// var globalScopeVariable = "I'm a global variable"; // these kind of global variables go and attach to the window object
// a = 10; // these kind of global variables go and attach to the window object
// function foo() {
//   console.log(globalScopeVariable);
// }

// Local Scope(function scope)

// function foo() {
//   var localScopeVariable = "I'm a local variable";
//   console.log(localScopeVariable);
// }
// foo();
// console.log(localScopeVariable);

// block scope

{
  let blockScopedVariable = "I'm a block scoped variable"; // block scope
  var localScopeVariable = "I'm a local scoped variable"; // local scope
  //   console.log(blockScopedVariable);
}

// console.log(blockScopedVariable);
console.log(localScopeVariable);

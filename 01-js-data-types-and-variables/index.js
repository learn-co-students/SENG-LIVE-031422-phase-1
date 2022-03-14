// ------------ Debugging and Testing tools: ------------

// Using console.log(): print and read only
// Run `node` in terminal to enter a REPL
// Debugger

// ------------ Variables: ------------

// What is a variable?
// individual piece of information stored under a specific name
// a representation of a value
// something that holds a value
// a data type that holds some value???

// How can a variable be declared

// const: when we don't expect a value to change, we can't redeclare the variable. We need to assign a value upon declaration!!

// const dog = "zoie"

// const dog = "fluffy"

// let: let allows us to re-assign the value of a variable. but it does not let us redeclare the variable. We can declare the variable without assignment

let dog = "zoie";

dog = "timmy";

let username;

username = "aisayo";

// var: we don't use this very often anymore

// What is the difference between let and const

// Scope: accessibility of our data

// Global scope: anything defined within this scope, is accessible through the entire file

// Local scope

// Block scope: anything inside of conditonal scopes, loop scopes

// ------------ 7 data types in JS: ------------

// typeof: we can use this to check the data type of a value that we are working with

// Number
// Whole number: 5
// Float number: 11.2
// NaN: Not a Number: of some miscalculation between something that is a number and something that is not a number

// String
// ""
// ''
// ``: string interpolation: when we have a string and we want to inject a statement into. statments: functions or variable. Only use when interpolating

// console.log(`My dog is ${dog}`)

// Undefined
// non-existant value
// no value has been assigned
// something that has no value attached to it
// never going to assign something to undefined

// Null
// non-existant value
// must be assigned
// let num;
// num ? num + num : null

// Boolean

// some truthy or falsey value
// use these in conditional statements

// 'true' or 'false'

// let x = false;

// can check the boolean value of something using double bang operator: !!

// examples of falsey values
//  - 0
//  - null
//  - undefined
//  - ""
//  - false
//  - NaN

// everything else is truthy

// BigInt: this is reserved for anything the number type can not handle aka exponentially large numbers

// Symbol: used in objects to denote the property of the object aka the key of the object as unique identifiers

// {
//     first_name: "aysan"
// }

// What is the difference between null and undefined?

// What is the relationship between data types and variables

// Variable is really just a container for information. It could be any number of data types

// ------------ Conditional statements ------------

// a way to add some control flow to our application

// if this is the case, do that
// if that is not the case do this

// if...else

// let pokemon = "Voltorb";
// let likes = 2; // global scope

// if (likes === 1) {
// //   let x = 0; // block scope variable
//   //   console.log("inside block scope:", likes);
//   console.log(`${pokemon} has 1 like`);
// } else {
//   console.log(`${pokemon} has ${likes} likes`);
// }

// logical operators:
// === : strict comparison: the value and the type
// == : loose comparison: the value but not the type 
// !== : strict comparison: these are not equal, right?
// < or <= 
// > or >=

// if...else if...else

let pokemon = "Voltorb";
let likes = 2;

// if (likes === 0) {
//   console.log("render: Show some love!");
// } else if (likes === 1) {
//   console.log('render: 1 like');
// } else {
//   console.log(`render: ${likes} likes`)
// }


// nesting conditional statements:
// if (likes === 0) {
//   console.log("render: Show some love!");
// } else if (likes >= 1) {
//     if (likes === 1){
//         console.log('render: 1 like');
//     } else if (likes > 1){
//         console.log(`render: ${likes} likes`)
//     }
// } 

// ternary operators
// we can only check 1 condition
// we cant nest ternary operators 
// we can nest them inside of an if/else if statment but why would you want to?

// condition ? truthy response : falsey response

// let favorite = false

// let response = favorite ? "❤️" : "♡"

// console.log(response)

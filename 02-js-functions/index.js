// What are JS functions and why do we use them?
// Function consolidates any set of actions into one command.
// Functions are used to perform a specific task
// functions are first class objects within JavaScript that we use to simplify our code
// They help us complete tasks that might be repetitive
// javascript functions help us categorize portions of code we want to execute, and due to this organization allows us to reuse and interconnect certain portions of our code
// Each function should be concerned with a single task function
// Functions are the bulding blocks of JS applications

// function declaration syntax:
// this type of syntax gets hoisted: means we can call the function before it has even been declared

// function nameOfFunction(){
//     // body of the function will be written
//     // aka: the steps to complete a task
// }

// loadPage()

let x = 0; // global variable

function loadPage() {
  let x = 5; // local variable: this can not be accessed by the global scope
  // console.log("page has loaded, run the program")

  if (true) {
    // block scope
    // anything defined in here can not be accessed upwards: aka the local scope. Can not move up the chain
  }
  return "this is a return value";
}

// loadPage(); // calling hte function and executing
// loadPage // returning the definition of the function

// why is nothing happening:
// we need to invoke the function (call the function)

// return values of the function
// this is some end value associated with the goal of the function will
// purpose is so we can use this value somewhere else
// const returnVal = loadPage()
// console.log(returnVal)
// anything after a return will not get executed

// Why is the function returning undefined? there is no return value

// Scopes:

// Global scopes: anything defined in the outer scope is accessible in the file meaning not inside of a function not inside of a block

// Block scopes: things defined within the scope of a condition/ loops

// Local scope: things defined within a function, local ONLY to the function and within the function

// parameters vs arguments

// parameters are the variables defined upon function definition/ when we create the function
// arguments are the values/data passed into the function when we are calling them
// we are giving the function some data to work with

function increaseNum(num) {
  return num * num;
  // somehwere in here im going to use num using the variable 'num'
}

increaseNum(5);
increaseNum(10);

// exercise #2

// function renderPokemon(character){
//     // console.log(`Rendering ${character}`)
// }

// renderPokemon("pikachu")

// // invoking vs reference

// // invoking a function, we include the () after the function name. This is calling hte function to execute

// // we can use referencing to pass the function somewhere to be used
// // in order to reference a function, we don't include the ()
// // used commonly when dealing with callback functions
// console.log(renderPokemon)

// first class functions

// functions can be treated as a value:
// 1. we can assign a function to a variable like a value
// 2. we can pass a function as an argument to another function (callback function)
// 3. a function can be the return value of another function

// function expression to declare functions:
// nameless functions are called anonymous functions
// can not call the function before it has been initialized

// renderPokemon() => cant do this, before the variable has been declared

// const renderPokemon = function(){
//     console.log('renderPOkemon')
// }

// renderPokemon()

// arrow function syntax

// anonymous arrow function:
// () => {things for the function to run} if we had more than 1 line
// () => return value if we only had 1 line'

const renderPokemon = (character) => `Rendering ${character}`; // if our function only has 1 return/line of code, we can make it a one liner

// renderPokemon("character")

// if only provided 1 parameter, we can leave out the () around the parameter

// when we use it in context of 1 liner, we also dont need to explicity use the 'return' keyword

// if we do have more than 1 line, we need to include the {} and we need to use the 'return' keyword

// const renderPokemon = character => {
//     console.log(character)
//     return `Rendering ${character}`
// }

// Callback functions: 
// functions that are the argument of another function are called
// we want to pass only a reference of the function its going to be later invoked inside of the function that is receiving it 

// setTimeout(function(){
//     console.log("this is the setTimeout()")
// }, 5000)

// const fun = () => console.log("this is the setTimeout()")

setTimeout(() => "this is the setTimeout()", 5000)

// function setTimeout(callbackFun, countdown){
//     // we start the countdown
//     // when the countdown is done
//     // then we invoke the callback function like so: 
//     // return callbackFun()
// }


// a function can be returned by another function 


function firstFunction(num){
    // does something 
    return num + num 
}

function anotherFunction(cb){
    console.log(cb)
    return cb(10)
}

console.log(anotherFunction(firstFunction))


// im invoking another function 
// another function is invoking the callback function inside of itself  
// but another function is not returning anything which results in undefined 
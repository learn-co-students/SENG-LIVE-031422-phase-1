// // warm up exercise

// const add = (num1, num2) => num1 + num2

// // function sum(num1, num2){
// //     return num1 + num2
// // }

// const multiply = (num1, num2) => num1 * num2

// // function multiply(num1, num2){
// //     return num1 * num2
// // }

// const sub = (num1, num2) => num1 - num2

// // function sub(num1, num2){
// //     return num1 - num2
// // }

// // cb => callback function so its value is going to be another function
// // const compute = (cb) => cb(6, 3)

// function compute(cb){ 
//     return cb(6, 3)
// }

// pass in the definition of the function
// compute(add)
// compute(multipy)
// compute(sub)

// Understanding arrays

// What are arrays and how do they allow us to structure our data?
// a data structure 
// allows us to store a collection of data 
// this data can be of any type 
// ordered collection/list: what we put into an array is the same order we're going to get it out of the array 

// Define a variable 'pokemon' set to an empty array.

// const pokemon = []

// Rewrite the 'pokemon' array with the following elements: 'pikachu', 'bulbasour', 'jigglypuff'

// const pokemon = ['pikachu', 'bulbasour', 'jigglypuff']

// Elements: 
// it is the item inside of an array 
// each elements has an index number associated with it
// what is an index: number that identifies the array elements position in the array. Starts 0 and increments by 1 for every element 

// why do we care for index numbers?  
// when we want to select an element for any read, update, delete types of actions 

// how we use the index number, arr[idx] => element 

// Return 'bulbasour' from the pokemon array
// pokemon[1]

// select the last element in the array
// arr[arr.length - 1]

// pokemon[pokemon.length - 1] => pokemon[2]

// Modifying elements:

// Add a new element 'mew' to the end of pokemon. There are 2 ways this can be accomplished. Which method is best practice and why?

// .push(): modifies our original array/ destructive
// pokemon.push('mew')

// spread operator(to add to the END of the array): make a shallow copy of the array to which we can then modify, leaving the original array alone 

// const newPokemon = [...pokemon, 'mew']

// slice 

// Add a new element 'Gloom' to the beginning of pokemon.
// unshift is destructive 
// spread operator: non destructive
// example: ["newEl", ...originalArr]
// const newPokemon = ["Gloom", ...pokemon]

// Remove the first element of 'pokemon'
// shift: remove from the beginning
// pokemon.shift()

// .pop: will remove last element

// could use slice too because this non destructive

// Create a new array, 'favorites', that includes the first 2 elements from pokemon only and the following 2 new elements: 'squirtle', 'turtwig'.

// create a copy of array, spread operator 
// splice?? 

// const favorites = [...pokemon.slice(0,2), "Squirtle", "turtwig"]

// const favorites = [...pokemon.splice(0,2), "squirtle", "turtwig"]

// For the following exercises, comment in the following array:

const pokemon = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine"]

// looping methods:

// what does looping mean? 
// Going over the elements within the array
// To “check” each one
// dealing with each element individually 
// iterate through elements of an array


// for loop
// Define a for loop that will log each pokemon character to the console.

// for (let i = 0; i < arr.length; i++){
//     // access each element by using bracket notation:
//     // arr[i]
// }

// for (let i = 0; i < pokemon.length; i++){
//     console.log(pokemon[i])
// }

// for loops are not only restricted to arrays 
// for (let i = 0; i < 5; i++){
//     console.log("hello")
// }

// for..of
// we set a variable to the value of the element that we are currently cycling over
// for (const el of arr){
//     // inside here, el is going to represent the element we want to do something with 
// }

// Rewrite the previous exercise using a for..of loop

// for (const character of pokemon){
//     console.log(character)
// }

// .forEach
// do something with each element in the array
// it will receive a callback function as an argument 
// callback function is concerned with running some code regarding each element 
// have to call .forEach on an array 
// has no return value
// used typically for some type of read action 

// Use .forEach() to iteratate through the pokemon array and return each character name in large caps

// pokemon.forEach((character) => {
//     // we can do something with character
//     console.log(character.toUpperCase())
// })

// will return undefined because forEach has no return value 
// console.log(pokemon.forEach(character => character.toUpperCase()))

// Modifying an elements in an array

// .map()
// use to change the elements  
// will have a return value which is a new array with the modified elements 
// it will take a callback function as its argument and pass each element to the callback function 
// it needs to be called on an array  
// it is nondestructive

// structure of a map method is: 
// arr.map((el) => {
//     //dosomething with the element
// })
// return is going to be a new array 

// Using map, return a new array with all pokemon character names lowercased.

// const newArr = pokemon.map(function(character){
//     const firstLetter = character.charAt(0).toLowerCase()
//     const restOfString = character.slice(1)
//     const newName = firstLetter + restOfString
//     return newName
// })

// Searching an array: .find() vs .filter()

// Create a method that will return all pokemon characters that start with the letter 's'. Which array method should be used for this task?


// in order to just grab the first character of a string 
// we split it 



// const arr = "this is a string".split(" ")


// const x = arr.map(el => {
//     const firstLetter = el.charAt(0).toUpperCase()
//     const restOfString = el.slice(1)
//     const newString = firstLetter + restOfString
//     return newString
// })

// console.log(x.join(" "))


// find all the characters whos name starts with 'S' 

// .find(callbackFunction)
// needs to be called on an array
// to search for something
// return value of find is going to be 1 element/ not an array 

// const result = pokemon.find((character) => character.startsWith("S"))

// console.log("result:", result)

// .filter() 
// needs to be called on an array  
// to search for something
// return value is a new array of the matched items as the elements 

const result = pokemon.filter((character) => character.startsWith("S"))

console.log("result:", result)
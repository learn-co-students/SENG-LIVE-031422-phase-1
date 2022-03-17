// What is the key difference between an array and an object?
// we can assign keys and values
// Don’t have to depend on order in objects 
// Objects can let you access specific values by calling their keys 
// objects allow us to contain and access more complex sets of data 
// you can call elements in an object with a name rather than an index
// Objects can hold more data within each... object? Whereas arrays are more of a list of things?
// Objects just look better imo
// objects might  have descriptive key?

// Creating objects:

// Define a character variable and assign it to an object containing name, img, and likes keys. The value of likes should be 0 while name and img can be whatever pokemon character data you like. 'img' should be an address to an img as a string.
const character = {
  name: 'pikachu',
  img: "www.img.com", 
  likes: 0
}

// Retreiving values from an object

// bracket notation
// obj["key"]

character["name"] //=> return 'pikachu'

// using variables for keys 
// when we are using keys more dynamically 

const n = "name"

character[n]

// let key = prompt("What do you want to know about the character. Enter('name', 'img', or 'likes')")

// console.log(key)

// console.log(character[key])


// dot notation
// limitation: special characters 

// console.log(character.key) // returning undefined because the compiler is looking for a key of 'key' in the character object 

// Define a function increaseValue() that should take in 2 arguments: 'object' and 'key'. Increment the value returned from the 'key' by 1 so that every time the function is invoked, the number of likes will increment.

// Expectation: increaseValue(character, "likes") -> 1
// Expectation: increaseValue(character, "likes") -> 2
// Expectation: increaseValue(character, "likes") -> 3


// answer: 

// function increaseValue(obj, key){
//   return ++obj[key]
// }

// const increaseValue = (object, key) => ++object[key]

// function expression syntax:
// const increaseValue = function(object, key){
//   return ++object[key]
// }

// increaseValue(character, "likes")


// Manipulating an object

// Adding a new property and value to an existing object

// a new key pair value: key: 'abilities', value: 'thunderbolt'

// destructive: we are mutating the original state 

// bracket notation  

// character["abilities"] = "thunderbolt"

// dot notation 

// character.abilities = "thunderbolt"

// non-destructive

// spread operator 

// {...originalObj, newKey: value}

const updatedChar = {...character, abilites: "thunderbolt"}

// Object.assign()

// Object.assign({}, objBeingCopied, {newKey: value})

// const updatedChar2 = Object.assign({}, character, {abilities: "thunderbolt"})


// updating a key's value using the spread operator 
const updatedUpdatedChar = {...updatedChar, abilites: "tail whip"}

// Create a function updateChar(): this function should take in three parameters: an object, a key and a value. This function should operate non-destructively so that it will return a new Object with the new property included.

// Expection: updateChar(character, "abilities", []) -> {name: 'Pikachu', img: 'www.img.com', likes: 0, abilities: []}

// function updateChar(obj, key, value){
//   return {...obj, [key]: value};
// }

// const updateChar = (obj, key, value) => {
//   return {...obj, [key]: value} // "abilities: []"
// }

// Removing a key/value pair from an existing object
// removing by the key 

// destructive

// delete character["name"]
// delete character.img

// non-destructive

// const copy = {...character}
// delete copy.name


// for...in loop

// for (const key in obj){
//   obj[key] // give us the value to work with 
// }

// Write a function charDetails() that takes a character object in as an argument and loops through the object using the for...in method to print out the values of each property

function charDetails(obj){
  for (const key in obj){
    console.log(key + ": " + obj[key])
  }
}

// Expectation: charDetails(character) -> name: Pikachu img: www.img.com likes: 0

// Write a function printAbilities that accepts a character object as an argument and returns a list of the characters abilities as a string.  Use the provided pikachu object to test.

// Expectation: printAbilities(pikachu) -> "static, lightning-rod"

const pikachu = {
  name: "Pikachu",
  img: "www.img.com",
  likes: 0,
  abilities: [
    {
      name: "static",
    },
    {
      name: "lightning-rod",
    },
  ],
};

// BONUS: Modify printAbilities so that it returns the string as: 'Abilities: static, lightning-rod'

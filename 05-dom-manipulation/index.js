const pokemon = [
  {
    id: 1,
    name: "bulbasaur",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    likes: 4,
  },
  {
    id: 2,
    name: "ivysaur",
    img: "https://images.cults3d.com/6VgkTLM1j-CTAMhEJTtsRV1z6N8=/516x516/https://files.cults3d.com/uploaders/14845535/illustration-file/5d09c257-51ed-4d65-aa36-3f9201af34c4/ivysaur.png",
    likes: 21,
  },
  {
    id: 3,
    name: "venusaur",
    img: "https://images.saymedia-content.com/.image/t_share/MTc2MjYwODQ5NTk2NTcyODYy/pokemon-venusaur-nicknames.png",
    likes: 7,
  },
  {
    id: 4,
    name: "charmander",
    img: "https://pixy.org/download/1207107/",
    likes: 20,
  },
  {
    id: 5,
    name: "charmeleon",
    img: "https://static.pokemonpets.com/images/monsters-images-800-800/5-Charmeleon.webp",
    likes: 11,
  },
];

// arrays/iteration

// what methods do we have available to use?
// for loops, for of, .forEach, .map, .find, .filter

// What am I trying to achieve? Which method is best for this goal?

// I want to pass each character inside the pokemon to another function? Which method is best for this task and why?

// .map function : if i was changing the element, this is the tool i want to use
// for...of: using this tool we would have to write another function that we can pass the element to
// .forEach: don't need a return value

// let newArr = []
// function loopPokemon(arr) {
//   for (const el of arr) {
//     // pass el to another function
//     newArr.push(el)
//     anotherFun(el);
//   }
// }

// function anotherFun(el) {
//   console.log(el);
// }

// arr.forEach((el) => console.log(el));

// arr.forEach(function (el) {
//   console.log(el);
// });

// // how does map work: it breaks apart our array, dealing with each individual element independently
// // what is being passed to the callback function inside the (): each element in the array
// // what is the return value of the result once map has completed? a new array with the changed elements
// const newArr = arr.map((element) => {
//   // we can do something with the element here
//   // running some task on each element by itself
// })

// we use map if we want to modify elements

// objects

// dealing with objects

// 1. how to create an object
// a create a new character with name, img, likes as the properties/keys

// const newChar = {
//   name: "pikachu"
// }

// // 2. first understand what the object looks like, then use the properties to return the values 

// // return pikachu 
// newChar.name // dot notation is used more commonly, especially when we know the literal property name 
// newChar["name"] // bracket notation is used when we use variables

// What is the DOM? 
// Document Object Model
// A representation of our HTML 
// Something we are going to interact with to Create, Read, Update and Delete [CRUD]

// READ: how do we select elements on the DOM

// using selectors:
// id: no element should share the same id on the DOM, notation: #
// class: notation: dot
// tag name

// document.getElementById();
// will accept the elements ID as an argument 
// used the elements id property to select and return 
// Returns a single element, the first match
// restriction: it can only be called on the document object 

const pokeForm = document.getElementById('poke-form')

// document.getElementsByClassname 
// returns a list of elements, returns all the elements with the same class name 
// return a HTMLcollection
// Can convert to an array using the Array.from()

const labels = document.getElementsByClassName('form-label')

// document.querySelector()
// not limited to just Id, we can pass in class names, ids and tags 
// returns one element
// need to include the selector notation in the argument i.e #id, .class
// we can call these on descendants of document

const lectureDiv = document.querySelector('#lecture-goals')

// document.querySelectorAll()
// can be used for tags and classes... if you're using it for ID's re-evaluate
// still returns a list: NodeList, forEach works on a nodelist 

const allDivs = document.querySelectorAll('div')


// create elements 

// select my target for all the character cards 

const pokeContainer = document.querySelector('#poke-container')


// method used to create a new element is: document.createElement(element)


// i have an array of pokemon characters: pokemon 
// I need to generate a card for each character inside this array  

pokemon.forEach((character) => renderPokemon(character))


// a function responsible for creating each character called renderPokemon()

function renderPokemon(char){
console.log(char)
  // create the card is a div  pokeCard 

  const pokeCard = document.createElement('div')
  pokeCard.id = `poke-${char.id}`
  pokeCard.className = 'poke-card'

  // append  
  // appendChild
  
  // inside the pokeCard, need to create an img element
  const pokeImg = document.createElement('img')
  pokeImg.src = char.img
  pokeImg.alt = `${char.name} image`

  // add the img to the DOM but where???
  pokeCard.append(pokeImg)
  
  // inside the pokeCard, need to create h3 tag with the characters name  
  
  // 
  // slap the pokeCard on the DOM
  pokeContainer.appendChild(pokeCard)
}
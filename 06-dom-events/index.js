// textContent: good for the text rendered inside of an HTML element
// innerHTML: want to update the actual elements of another element
// innerText: something used to set text for an element

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

const pokeContainer = document.querySelector("#poke-container");

pokemon.forEach(function (character) {
  renderPokemon(character);
});

function createDiv(id, className) {
  const div = document.createElement("div");
  div.id = id;
  div.className = className;
  return div;
}

function renderPokemon(char) {
  const pokeCard = createDiv(`poke-${char.id}`, "poke-card");

  const pokeImg = document.createElement("img");
  pokeImg.src = char.img;
  pokeImg.alt = `${char.name} image`;

  const pokeName = document.createElement("h3");
  pokeName.textContent = char.name;

  const pokeLikes = document.createElement("h3");
  pokeLikes.textContent = "Likes: ";

  const likesNum = document.createElement("h5"); // createElement CREATES A NODE
  likesNum.className = "likes-num";
  likesNum.textContent = char.likes;

  // `<img src="blah.com">`: string literal syntax, not a node it is a string

  const likesBttn = document.createElement("button");
  likesBttn.className = "like-bttn";
  likesBttn.textContent = "♥";

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-bttn";
  deleteBtn.textContent = "Delete";

  pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, likesBttn, deleteBtn);
  pokeContainer.appendChild(pokeCard);
  // append: will accept a string as well as a node, accepts multiple arguments
  // appendChild: needs to be a direct node, only accepts 1 argument
}


// remove elements from the DOM
// .remove()
// First select the element that is being removed, then call .remove()
document.querySelector('#lecture-goals').remove()

// update Elements on the dom
// select the element that we are updating, and then update the contents 

// document.getElementById("header").innerHTML = `<img id="header-img" src="https://external-preview.redd.it/tQged7mKJ3cUpNMq5IMeceZvyKP3cTyHqhNmKEQ0Vv8.png?auto=webp&s=fb5fd61cae0bc9cde2bc2a006b1e2aeb0c935ce9" />`
 
// remove the h1 and append teh new img element 


function replaceHeader(){
  const header = document.getElementById('header')
  const img = document.createElement('img')
  img.id = "header-img"
  img.src = "https://external-preview.redd.it/tQged7mKJ3cUpNMq5IMeceZvyKP3cTyHqhNmKEQ0Vv8.png?auto=webp&s=fb5fd61cae0bc9cde2bc2a006b1e2aeb0c935ce9"
  
  // how do i replace header innerHTML with img 
  
  header.replaceChildren(img)
}

replaceHeader()


// static vs dymanic webpages: dynamic pages are pages user can interact with and change according to their actions. Static pages similar to landing pages, not any interactivity. 


// events: some type of interact with our HTML elements

// event type: type of action we are listening for: click, mousover, submit, keyDown, keyUp, DOMContent

// event listener: going to listen for a type of event, and then fire off the event handler 

// we can attach an event to an element in 2 ways: 
// 1. inline with the HTML element: limitation can only add 1 event to an element
// 2. .addEventLister('event type', callback function)

// event handler: this is the callback function responsible for executing the tasks after an event has occured


// Work flow:

// 1. select the element that an event will be created for 
// 2. attach an event listener to the target: decide what event is being listened and what the event handler is going to execute 

// event object: produced when an event occurs. it has proeprties and methods that can be called on it. info most commonly use: target(what element produced the event)


// first task: attach event to the poke form and handle it

// grab the form(target):
const pokeForm = document.getElementById('poke-form')

// attach the event listener to my target: 
pokeForm.addEventListener('submit', (e) => {
  e.preventDefault()
  // we need a preventDefault: so that we can stop the native behavior or the element and inject our own behaviors

  // form is submitted, we need to collect the values of the form:
  const name = document.querySelector('#name-input').value
  const img = document.querySelector('#img-input').value

  // create a new Character object

  // ES6: when you have an object key and value that are the same, can combine to a one word value because it was name: name => name (simple object creation)
  const newChar = {
    name, // name: name
    img, // img: img
    id: 6, // NEEDS TO CHANGE: talk about this in convo about POST
    likes: 0
  }

  // how do i get the newChar on the DOM
  renderPokemon(newChar)
  pokeForm.reset()

})
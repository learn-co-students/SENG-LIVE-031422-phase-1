// Client side vs Server side

// client side is the user agent: this is what our user is going to see
// Server side is the part under the hood that is either getting or sending some data 


// Request/Response flow is sthe communication between the client and server. Client will send a request to the server, server will respond with a successful response, or a failed response

// If successful, we're getting some data back. If it failed, we're getting some response telling us what went wrong


// Making requests to the server and handling the responses received

// Today we are just retreiving resources from our server: db.json


// What do we need to request data from a location 

// 1. Endpoint: the URL we want to request data from
// Endpoint we are using is: http://localhost:3000/characters
// 2. The HTTP verb: the type of request we are making. GET, POST, PATCH, DELETE

// use a method to make a request to the server: 

// fetch(): method that belongs to the window
// fetch by default will always make a GET request

const getPokemon = () => {
  // structure of a fetch()
  // fetch is asynchronous
  // What is asynchronous? it means the next bits of code can run while this function continues to complete 
  fetch("http://localhost:3000/characters") // return value of this method call will be a promise object
  // we handle the promise reponse with a .then, we are going to take the response and turn into an object
  .then(resp => resp.json()) // return another promise
  .then(characters => {
    // handle this array of characters so that each character renders to the DOM
    characters.forEach(renderPokemon)
    // characters.forEach((character) => renderPokemon(character))
  })
}

getPokemon()

const pokeContainer = document.querySelector("#poke-container");
const pokeForm = document.querySelector("#poke-form");

// event handler for the poke-form submission:
const createPokemon = (e) => {
  // e is the event object, event objects are actually created when an event occurs
  e.preventDefault();
  const name = document.querySelector("#name-input").value;
  const img = document.querySelector("#img-input").value;

  let newChar = {
    id: 6, // NEEDS TO CHANGE,
    name,
    img,
    likes: 0,
  };

  renderPokemon(newChar);
  pokeForm.reset();
};

// we are only passing in a reference to the function as a callback
// What does adding () do to callback function
// event object will be passed implicitly to createPokemon
// under the hood this is what is happening:
// pokeForm.addEventListener("submit", (e) => createPokemon(e));

pokeForm.addEventListener("submit", createPokemon);

// this fires off when the like button is clicked
const increaseLikes = (char, likeNum) => {
      // inside here I need to increment the characters number of likes
      ++char.likes

      // how will I update the DOM to reflect the new number:
      likeNum.textContent = char.likes
}

const showCharacter = (character) => {
  // fetch the characters info from the server
  // endpoint that we are using is going to be tied to the character using their id number 
  // retrieve the info for one resource with the supplied id: "http://localhost:3000/characters/:id"
  fetch(`http://localhost:3000/characters/${character.id}`)
  .then(resp => resp.json())
  .then((character) => {
    const pokeCard = renderPokemon(character)
    pokeCard.id = "poke-show-card"
    pokeContainer.replaceChildren(pokeCard)
  })
}

const renderPokemon = (char) => {

  const pokeCard = document.createElement("div");
  pokeCard.id = `poke-${char.id}`;
  pokeCard.className = "poke-card";

  pokeCard.addEventListener("click", () => showCharacter(char));

  const pokeImg = document.createElement("img");
  pokeImg.src = char.img;
  pokeImg.alt = `${char.name} image`;

  const pokeName = document.createElement("h3");
  pokeName.textContent = char.name;

  const pokeLikes = document.createElement("h3");
  pokeLikes.textContent = "Likes: ";

  const likeNum = document.createElement("h3");
  likeNum.className = "likes-num";
  likeNum.textContent = char.likes;

  const likesBttn = document.createElement("button");
  likesBttn.className = "like-bttn";
  likesBttn.textContent = "♥";

  // we are attaching the event listener here because we have access to the element directly upon creation
  // cleaned up version, more modern syntax:
  likesBttn.addEventListener('click', () => increaseLikes(char, likeNum))

  const deleteBttn = document.createElement("button");
  deleteBttn.className = "delete-bttn";
  deleteBttn.textContent = "delete";

  // could use refactoring:
  deleteBttn.addEventListener('click', () => {
    pokeCard.remove()
    // inside here, im going to remove the character card from the DOM
  })

  pokeCard.append(pokeImg, pokeName, pokeLikes, likeNum, likesBttn, deleteBttn);
  pokeContainer.appendChild(pokeCard);
  return pokeCard
}

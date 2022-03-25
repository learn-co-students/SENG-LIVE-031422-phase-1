const getPokemon = () => {
  fetch("http://localhost:3000/characters")
    .then((resp) => resp.json())
    .then((characters) => {
      characters.forEach(renderPokemon);
    });
};

getPokemon();

const pokeContainer = document.querySelector("#poke-container");
const pokeForm = document.querySelector("#poke-form");

const createPokemon = (e) => {
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

pokeForm.addEventListener("submit", createPokemon);

const increaseLikes = (char, likeNum) => {
  ++char.likes;
  likeNum.textContent = char.likes;
};

const showCharacter = (character) => {
  fetch(`http://localhost:3000/characters/${character.id}`)
    .then((resp) => resp.json())
    .then((character) => {
      const pokeCard = renderPokemon(character);
      pokeCard.id = "poke-show-card";
      pokeContainer.replaceChildren(pokeCard);
    });
};

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
  likesBttn.addEventListener("click", () => increaseLikes(char, likeNum));

  const deleteBttn = document.createElement("button");
  deleteBttn.className = "delete-bttn";
  deleteBttn.textContent = "delete";
  deleteBttn.addEventListener("click", () => {
    pokeCard.remove();
  });

  pokeCard.append(pokeImg, pokeName, pokeLikes, likeNum, likesBttn, deleteBttn);
  pokeContainer.appendChild(pokeCard);
  return pokeCard;
};

// ES6 concepts:

// arrow functions 
// simple object definition: when the key and value have the same identifier, can collapse into one word
// Destructuring: RULE: which is the variable names need to match the property names

// const student = { name: "Elijah", grade: "Flatiron School "}

// const {name, grade} = student 

// function sayName({name, grade, misc}){
//   console.log(grade)

//   name 
//   grade 
//   misc
// }

const students = ["elijah", "jacob", "griffin"]

const [e, , g] = students


const BASE_URL = 'http://localhost:3000'
const pokeContainer = document.querySelector("#poke-container");
const pokeForm = document.querySelector("#poke-form");
const pokeFormContainer = document.querySelector("#poke-form-container");

const getPokemon = () => {
  fetch(`${BASE_URL}/characters`)
    .then((resp) => resp.json())
    .then((characters) => {
      characters.forEach(renderPokemon);
    });
};

getPokemon();

const createPokemon = (e) => {
  e.preventDefault();
  const name = document.querySelector("#name-input").value;
  const img = document.querySelector("#img-input").value;

  let newChar = {
    name,
    img,
    likes: 0,
  };

  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newChar),
  };

  fetch(`${BASE_URL}/characters`, configObj)
  .then(resp => resp.json())
  .then(character => renderPokemon(character))
  pokeForm.reset();

};

pokeForm.addEventListener("submit", createPokemon);

const increaseLikes = (e, char, likeNum) => {
  e.stopPropagation();

++char.likes;

const configObj = {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({likes: char.likes})
}
  
// optimistically rendering
  fetch(`${BASE_URL}/characters/${char.id}`, configObj)
  likeNum.textContent = char.likes;
};

const deleteChar = (e, pokeCard, char) => {
  console.log(pokeCard)
  e.stopPropagation();

  fetch(`${BASE_URL}/characters/${char.id}`, {
    method: 'DELETE'
  })

  pokeCard.remove();
}

const renderComment = (comment, commentsDiv) => {
  let li = document.createElement("li");
  li.textContent = comment.content;
  commentsDiv.append(li);
  return li;
};

const commentsForm = () => {
  let form = document.createElement("form");
  form.id = "comment-form";

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const content = e.target.firstChild.nextElementSibling.value;
    const characterId = parseInt(
      document.querySelector("#poke-show-card").dataset.id
    );

    const newComment = {
      content,
      characterId,
    };

    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newComment)
    }

    fetch(`${BASE_URL}/comments`, configObj)
    .then(resp => resp.json())
    .then(comment => {
      // do something with it
      // need to append the comment to the comments div that we identified

      // grab the comments div? 
      const commentsDiv = document.querySelector(`#comment-card-${characterId}`)

      // grab characters.comments and call .length on that array
      // manipulate the text content of that h4 to new number
      const h4 = document.querySelector('h4')
      fetch(`${BASE_URL}/characters/${characterId}`)
      .then(resp => resp.json())
      .then(character => {
        h4.textContent = `${character.comments.length} comments`
      })
      
      // pass the comment to renderComment
      renderComment(comment, commentsDiv)
      form.reset()
    }) 
  });

  let commentInput = document.createElement("input");
  commentInput.type = "text";
  commentInput.id = "comment-input";

  let label = document.createElement("label");
  label.className = "form-label";
  label.textContent = "Leave a comment: ";
  form.appendChild(label);

  let submit = document.createElement("input");
  submit.type = "submit";
  submit.id = "submit";

  form.append(commentInput, submit);

  return form;
};

const showCharacter = (character) => {
  fetch(`${BASE_URL}/characters/${character.id}`)
    .then((resp) => resp.json())
    .then((character) => {
      const pokeCard = renderPokemon(character);
      pokeCard.id = "poke-show-card";
      pokeCard.dataset.id = character.id;
      loadComments(pokeCard, character);
      pokeContainer.replaceChildren(pokeCard);
      pokeFormContainer.replaceChildren(commentsForm());
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
  likesBttn.addEventListener("click", (e) => increaseLikes(e, char, likeNum));

  const deleteBttn = document.createElement("button");
  deleteBttn.className = "delete-bttn";
  deleteBttn.textContent = "delete";
  deleteBttn.addEventListener("click", (e) => deleteChar(e, pokeCard, char));

  pokeCard.append(pokeImg, pokeName, pokeLikes, likeNum, likesBttn, deleteBttn);
  pokeContainer.appendChild(pokeCard);
  return pokeCard;
};

const loadComments = (pokeCard, character) => {
  const commentsDiv = document.createElement("div");
  commentsDiv.id = `comment-card-${character.id}`;
  const h4 = document.createElement("h4");
  h4.textContent = `${character.comments.length} comments:`;
  commentsDiv.append(h4);
  pokeCard.append(commentsDiv);
  character.comments.forEach((comment) => renderComment(comment, commentsDiv));
};

const emojis = ["🍎","🍌","🍒","🍇","🍉","🍍","🥝","🍓"];
let cards = [...emojis, ...emojis];

let firstCard = null;
let secondCard = null;
let lock = false;
let matches = 0;
let tries = 0;

const board = document.getElementById("board");
const triesDisplay = document.getElementById("tries");
const popup = document.getElementById("popup");
const finalTries = document.getElementById("finalTries");

function shuffle() {
  cards.sort(() => 0.5 - Math.random());
}

function createBoard() {
  board.innerHTML = "";
  shuffle();
  matches = 0;
  tries = 0;
  triesDisplay.innerText = tries;

  cards.forEach(emoji => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.value = emoji;
    card.innerText = "?";
    card.addEventListener("click", flipCard);
    board.appendChild(card);
  });
}

function flipCard() {
  if (lock || this.classList.contains("flipped")) return;

  this.classList.add("flipped");
  this.innerText = this.dataset.value;

  if (!firstCard) {
    firstCard = this;
  } else {
    secondCard = this;
    lock = true;
    tries++;
    triesDisplay.innerText = tries;

    if (firstCard.dataset.value === secondCard.dataset.value) {
      matches++;
      resetTurn();

      if (matches === emojis.length) {
        setTimeout(showPopup, 500);
      }
    } else {
      setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        firstCard.innerText = "?";
        secondCard.innerText = "?";
        resetTurn();
      }, 800);
    }
  }
}

function resetTurn() {
  [firstCard, secondCard, lock] = [null, null, false];
}

function showPopup() {
  finalTries.innerText = tries;
  popup.style.display = "flex";
}

function resetGame() {
  popup.style.display = "none";
  createBoard();
}

createBoard();
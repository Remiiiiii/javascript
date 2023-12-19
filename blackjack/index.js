let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let cards = [];

let player = {
  Name: "Remy",
  Chips: 1000,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.Name + ": $" + player.Chips;

const startBtn = document.getElementById("startBtn");
const messageEl = document.getElementById("message-el");
const newCardBtn = document.getElementById("newCardBtn");
const playAgainBtn = document.getElementById("playAgainBtn");

window.onload = () => {
  startGame();
  newCard();
};

playAgainBtn.addEventListener("click", () => {
  window.location.reload();
});

const startGame = () => {
  if (!isAlive) {
    startBtn.addEventListener("click", () => {
      let firstCard = getRandomCard();
      let secondCard = getRandomCard();
      cards.push(firstCard, secondCard);
      cardsEl.textContent = "Cards: " + cards;
      sum = firstCard + secondCard;
      sumEl.textContent = "Sum: " + sum;
      renderGame();
      disableStartBtn(startBtn);
    });
  }
};

function disableStartBtn(e) {
  e.disabled = true;
}
function disableNewCardBtn(e) {
  e.disabled = true;
}

const renderGame = () => {
  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Winner winner, chicken dinner!";
    disableNewCardBtn(newCardBtn);
  } else {
    message = "You're out of the game!";
    disableNewCardBtn(newCardBtn);
  }

  messageEl.textContent = message;
  cardsEl.textContent = "Cards: " + cards.join(" ");
  sumEl.textContent = "Sum: " + sum;
};

const newCard = () => {
  newCardBtn.addEventListener("click", () => {
    if (!isAlive || sum < 21) {
      let card = getRandomCard();
      sum += card;
      cards.push(card);
      renderGame();
    }
  });
};

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;

  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}

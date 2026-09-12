const card = document.querySelectorAll(".card");
console.log(card);

// ==================== TIMER LOGIC ====================
// Starts the timer when the player clicks the first card
let seconds = 0;
let timerStarted = false;
let timer;
card.forEach(function (card) {
  card.addEventListener("click", function () {
    //card.style.backgroundColor = "red";
    console.log(card.classList);
    console.log(card.classList[1]);
    if (!timerStarted) {
      timerStarted = true;

      timer = setInterval(function () {
        seconds++;
        document.getElementById("times").innerHTML = seconds;
        console.log(seconds);
      }, 1000);
    }
  });
});

// ==================== CARD VALUES ====================
// Stores the image for each card and its matching pair
const cardValues = [
  "image/Banana.png",
  "image/Banana.png",
  "image/Apple.png",
  "image/Apple.png",
  "image/Orange.png",
  "image/Orange.png",
  "image/Mango.png",
  "image/Mango.png",
  "image/Grapes.png",
  "image/Grapes.png",
  "image/Strawberry.png",
  "image/Strawberry.png",
  "image/Avocado.png",
  "image/Avocado.png",
  "image/Watermelon.png",
  "image/Watermelon.png",
];

let matchedCards = [];
let flippedCards = [];
let locked = false;
let moves = 0;
let score = 1000;
card.forEach(function (card, index) {
  card.addEventListener("click", function () {
    if (locked) return;

    if (!matchedCards.includes(card)) {
      //card.innerHTML = cardValues[index];
      const img = document.createElement("img");
      img.src = cardValues[index];
      card.querySelector("span").innerHTML = "";
      card.querySelector("span").appendChild(img);
      card.classList.add("flipped");
      flippedCards.push(card);

      if (flippedCards.length === 2) {
        locked = true;
        moves++;
        document.getElementById("moves").innerHTML = moves;
        console.log("Moves", moves);

        if (flippedCards[0].innerHTML === flippedCards[1].innerHTML) {
          matchedCards.push(flippedCards[0], flippedCards[1]);
          console.log("Match Found!");
          flippedCards = [];
          locked = false;

          if (matchedCards.length === 16) {
            clearInterval(timer);
            document.getElementById("win").innerHTML =
              "You Win!" + " Final Moves: " + moves + " Final Score: " + score;
          }
        } else {
          console.log("No Match!");
          const cardToHide = flippedCards;
          setTimeout(function () {
            cardToHide.forEach(function (card) {
              card.innerHTML = "<span>?</span>";
              card.classList.remove("flipped");
            });
            score -= 100;
            document.getElementById("score").innerHTML = score;
            flippedCards = [];
            locked = false;
          }, 1000);
        }
      }
    }
  });
});

const reset_button = document.getElementById("reset-btn");

reset_button.addEventListener("click", function () {
  moves = 0;
  document.getElementById("moves").innerHTML = moves;

  seconds = 0;
  document.getElementById("times").innerHTML = "00:00";

  score = 1000;
  document.getElementById("score").innerHTML = score;

  clearInterval(timer);
  timerStarted = false;

  flippedCards = [];
  matchedCards = [];
  locked = false;

  card.forEach(function (card) {
    card.innerHTML = "<span>?</span>";
    card.classList.remove("flipped");
  });

  cardValues.sort(function () {
    return Math.random() < 0.5 ? -1 : 1;
  });
});

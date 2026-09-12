const cards = document.querySelectorAll(".card");

// ==================== TIMER LOGIC ====================
// Starts the timer when the player clicks the first card
let seconds = 0;
let timerStarted = false;
let timer;
cards.forEach(function (card) {
  card.addEventListener("click", function () {
    if (!timerStarted) {
      timerStarted = true;

      timer = setInterval(function () {
        seconds++;
        let minutes = Math.floor(seconds / 60);
        let remainingSeconds = seconds % 60;
        let mm = String(minutes).padStart(2, "0");
        let ss = String(remainingSeconds).padStart(2, "0");
        document.getElementById("times").innerHTML = `${mm}:${ss}`;
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

// ==================== GAME STATE ====================
let matchedCards = [];
let flippedCards = [];
let locked = false;
let moves = 0;
let score = 1000;
cards.forEach(function (card, index) {
  card.addEventListener("click", function () {
    // Stop the player from clicking while two cards are being checked
    if (locked) return;

    // stop player for selecting a card that has already been matched
    if (!matchedCards.includes(card)) {
      // Reveal the selected card's image
      const img = document.createElement("img");
      img.src = cardValues[index];
      card.querySelector("span").innerHTML = "";
      card.querySelector("span").appendChild(img);
      card.classList.add("flipped");
      flippedCards.push(card);

      // Two cards are selected, so check if they are a matching pair
      if (flippedCards.length === 2) {
        locked = true;
        moves++;
        document.getElementById("moves").innerHTML = moves;
        console.log("Moves", moves);

        // comparing the two selected cards
        if (flippedCards[0].innerHTML === flippedCards[1].innerHTML) {
          // this is for that matched cards if pick they cannot select the card again
          matchedCards.push(flippedCards[0], flippedCards[1]);
          console.log("Match Found!");
          flippedCards = [];
          locked = false;

          if (matchedCards.length === 16) {
            clearInterval(timer);
            document.getElementById("win").innerHTML = `<h2>You Win!</h2>
              <p>Moves: ${moves}</p>
              <p>Score: ${score}</p>`;
          }
        } else {
          console.log("No Match!");
          const cardToHide = flippedCards;
          // Wait 1 second before hiding the incorrect pair
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

// ==================== RESTART GAME ====================

const reset_button = document.getElementById("reset-btn");

reset_button.addEventListener("click", function () {
  moves = 0;
  document.getElementById("moves").innerHTML = moves;

  seconds = 0;
  document.getElementById("times").innerHTML = "00:00";

  score = 1000;
  document.getElementById("score").innerHTML = score;

  document.getElementById("win").innerHTML = "";

  // Stop the current timer
  clearInterval(timer);
  timerStarted = false;

  // Reset the current game state
  flippedCards = [];
  matchedCards = [];
  locked = false;

  cards.forEach(function (card) {
    card.innerHTML = "<span>?</span>";
    card.classList.remove("flipped");
  });

  // Shuffle the card values for a new game
  cardValues.sort(function () {
    return Math.random() < 0.5 ? -1 : 1;
  });
});

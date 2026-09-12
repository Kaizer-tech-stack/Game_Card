const cards = document.querySelectorAll(".card");

// ==================== TIMER LOGIC ====================
// Starts the timer when the player clicks the first card
let seconds = 0;
let timerStarted = false;
let timer;
cards.forEach(function (card) {
  card.addEventListener("click", function () {
    //card.style.backgroundColor = "red";

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

// ==================== GAME STATE ====================
// Keeps track of matched cards, flipped cards, moves, and score
let matchedCards = [];
let flippedCards = [];
let locked = false;
let moves = 0;
let score = 1000;
cards.forEach(function (card, index) {
  card.addEventListener("click", function () {
    // Stop the player from clicking while two cards are being checked
    if (locked) return;

    // Stop the player from selecting a card that has already been matched
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
        // Lock the board while checking the two selected cards
        locked = true;
        // Count one move after the player selects two cards
        moves++;
        document.getElementById("moves").innerHTML = moves;
        console.log("Moves", moves);

        // Check if the two selected cards have the same image
        if (flippedCards[0].innerHTML === flippedCards[1].innerHTML) {
          // Store the matched cards so they cannot be selected again
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
          // Wait 1 second before hiding the incorrect pair
          setTimeout(function () {
            cardToHide.forEach(function (card) {
              card.innerHTML = "<span>?</span>";
              card.classList.remove("flipped");
            });
            // Penalize the player for an incorrect pair
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
// Resets all game data and returns the cards to their starting state
const reset_button = document.getElementById("reset-btn");

reset_button.addEventListener("click", function () {
  moves = 0;
  document.getElementById("moves").innerHTML = moves;

  seconds = 0;
  document.getElementById("times").innerHTML = "00:00";

  score = 1000;
  document.getElementById("score").innerHTML = score;

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

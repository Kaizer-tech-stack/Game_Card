const card = document.querySelectorAll(".card");
console.log(card);

let seconds = 0;
let timerStarted = false;
card.forEach(function (card) {
  card.addEventListener("click", function () {
    //card.style.backgroundColor = "red";
    console.log(card.classList);
    console.log(card.classList[1]);
    if (!timerStarted) {
      timerStarted = true;

      setInterval(function () {
        seconds++;
        document.getElementById("times").innerHTML = seconds;
        console.log(seconds);
      }, 1000);
    }
  });
});

const cardValues = [
  "banana",
  "banana",
  "apple",
  "apple",
  "orange",
  "orange",
  "mango",
  "mango",
  "grape",
  "grape",
  "strawberry",
  "strawberry",
  "avocado",
  "avocado",
  "watermelon",
  "watermelon",
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
      card.innerHTML = cardValues[index];
      card.classList.add("flipped");
      flippedCards.push(card);

      if (flippedCards.length === 2) {
        moves++;
        document.getElementById("moves").innerHTML = moves;
        console.log("Moves", moves);

        if (flippedCards[0].innerHTML === flippedCards[1].innerHTML) {
          matchedCards.push(flippedCards[0], flippedCards[1]);
          console.log("Match Found!");
          flippedCards = [];

          if (matchedCards.length === 16) {
            clearInterval(timerStarted);
            document.getElementById("win").innerHTML =
              "You Win!" + " Final Moves: " + moves + " Final Score: " + score;
          }
        } else {
          console.log("No Match!");
          const cardToHide = flippedCards;
          setTimeout(function () {
            cardToHide.forEach(function (card) {
              card.innerHTML = "";
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
  clearInterval(timerStarted);
  moves = 0;
  document.getElementById("moves").innerHTML = moves;

  seconds = 0;
  document.getElementById("times").innerHTML = "00:00";

  score = 1000;
  document.getElementById("score").innerHTML = score;

  flippedCards = [];
  matchedCards = [];

  card.forEach(function (card) {
    card.innerHTML = "?";
    card.classList.remove("flipped");
  });

  cardValues.sort(function () {
    return Math.random() < 0.5 ? -1 : 1;
  });
});

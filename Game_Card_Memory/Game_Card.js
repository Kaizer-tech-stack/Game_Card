function resetGame() {
  document.getElementById("reset").innerHTML = "Wazzup mfvker!";
}

const card = document.querySelectorAll(".card");
console.log(card);

card.forEach(function (card) {
  card.addEventListener("click", function () {
    //card.style.backgroundColor = "red";
    console.log(card.classList);
    console.log(card.classList[1]);
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

/*let flippedCards = []; // Array to store the flipped Cards
card.forEach(function (card) {
  card.addEventListener("click", function () {
    flippedCards.push(card);
    if (flippedCards.length === 2) {
      if (flippedCards[0].innerHTML === flippedCards[1].innerHTML) {
        console.log("Match Found!");
      } else {
        console.log("No Match!");
        const cardToHide = flippedCards;
        setTimeout(function () {
          cardToHide.forEach(function (card) {
            card.innerHTML = "";
            card.classList.remove("flipped");
          });
        }, 1000);
      }
      flippedCards = [];
    }
  });
});*/

let flippedCards = [];
card.forEach(function (card, index) {
  card.addEventListener("click", function () {
    if (!flippedCards.includes(card)) {
      card.innerHTML = cardValues[index]; // card values for each card
      card.classList.add("flipped");
      flippedCards.push(card);

      if (flippedCards.length === 2) {
        if (flippedCards[0].innerHTML === flippedCards[1].innerHTML) {
          console.log("Match Found!");
        } else {
          console.log("No Match!");
          const cardToHide = flippedCards;
          setTimeout(function () {
            cardToHide.forEach(function (card) {
              card.innerHTML = "";
              card.classList.remove("flipped");
            });
          }, 1000);
        }
        flippedCards = [];
      }
    }
  });
});

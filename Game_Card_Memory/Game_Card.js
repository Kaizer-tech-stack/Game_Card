function resetGame() {
  document.getElementById("reset").innerHTML = "Wazzup mfvker!";
}

const card = document.querySelectorAll(".card");
console.log(card);

card.forEach(function (card) {
  card.addEventListener("click", function () {
    card.style.backgroundColor = "red";
    console.log(card.classList);
    console.log(card.classList[1]);
  });
});

const cardValues = [
  "banana",
  "banana",
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

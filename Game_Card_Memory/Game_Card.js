function resetGame() {
  document.getElementById("reset").innerHTML = "Wazzup mfvker!";
}

const card = document.querySelectorAll(".card");
console.log(card);

card.forEach(function (card) {
  card.addEventListener("click", function () {
    card.style.backgroundColor = "red";
  });
});

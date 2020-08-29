const guess = document.querySelector("#guess-input");
const submit = document.querySelector("#guess-value");
const display = document.querySelector(".min-num");
const message = document.querySelector(".message");
const again = document.querySelector(".play-again");
const play = document.querySelector(".play-button");

let random;
let left = 3;
// Random number generating function
function generateRandom() {
  random = Math.floor(Math.random() * 10 + 1);
}
// Do it once
(function () {
  generateRandom();
})();

console.log(random);
// i as a refernce number
let i = 1;

// Clicking Submit
submit.addEventListener("click", isGuessCorrect);
function isGuessCorrect(e) {
  if (Number(guess.value) === random) {
    message.textContent = `${guess.value} is the correct answer`;
    message.style.color = "rgb(31, 201, 31)";

    again.textContent = "Wanna play again";
    play.style.display = "block";
    guess.setAttribute("readonly", "");

    console.log(true);
  } else {
    console.log(false);
    --left;
    if (left >= 1) {
      message.textContent = `${guess.value} is the not correct answer and you have ${left} more guesses`;
      message.style.color = "red";
      guess.value = "";
    } else {
      message.textContent = `NOPE!!.....The correct number was  ${random}`;
      again.textContent = "Wanna play again";
      play.style.display = "block";
      guess.setAttribute("readonly", "");
    }
  }
}

play.addEventListener("click", function () {
  location.reload();
});



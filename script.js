document.querySelector("body").style.backgroundColor = "#9370DB";

let secnumber = Math.trunc(Math.random() * 20) + 1;
console.log(secnumber);
let score = 20;
let highscore = 0;
// document.querySelector(".guessnum").textContent = secnumber;
// console.log(typeof Number(document.querySelector(".inputitem")));

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".inputitem").value);
  if (!guess) {
    displayMessage("no number");
    // document.querySelector(".message").textContent = "no number";
    // } else if (guess > secnumber) {
    //   if (score > 1) {
    //     displayMessage("too high!");
    //     // document.querySelector(".message").textContent = "too high!";
    //     document.querySelector(".inputitem").value = "";
    //     score--;
    //     document.querySelector(".score").textContent = score;
    //   } else {
    //     displayMessage("you lost");
    //     // document.querySelector(".message").textContent = "you lost";
    //     document.querySelector("body").style.backgroundColor = " red";
    //     document.querySelector(".inputitem").value = "";

    //     document.querySelector(".score").textContent = 0;
    //   }
    // } else if (guess < secnumber) {
    //   if (score > 1) {
    //     displayMessage("too low!");
    //     // document.querySelector(".message").textContent = "too low!";
    //     document.querySelector(".inputitem").value = "";
    //     score--;
    //     document.querySelector(".score").textContent = score;
    //   } else {
    //     displayMessage("you lost");
    //     // document.querySelector(".message").textContent = "you lost";
    //     document.querySelector("body").style.backgroundColor = " red";
    //     document.querySelector(".inputitem").value = "";

    //     document.querySelector(".score").textContent = 0;
    //   }
  } else if (guess === secnumber) {
    displayMessage("correct!");
    // document.querySelector(".message").textContent = "correct!";
    // document.querySelector(".inputitem").value = "";
    document.querySelector(".guessnum").textContent = secnumber;
    document.querySelector("body").style.backgroundColor = " #60b347";
    document.querySelector(".guessnum").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secnumber) {
    if (score > 1) {
      displayMessage(guess > secnumber ? "Too HIgh !!" : "Too low !!");
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".inputitem").value = "";
    } else {
      displayMessage("You lost");
      document.querySelector("body").style.backgroundColor = " red";
      document.querySelector(".inputitem").value = "";
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  secnumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector("body").style.backgroundColor = "#9370DB";
  displayMessage("start guessing");
  // document.querySelector(".message").textContent = "start guessing";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guessnum").textContent = "?";
  document.querySelector(".inputitem").value = "";
});

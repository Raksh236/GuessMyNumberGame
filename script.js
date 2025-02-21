document.querySelector("body").style.backgroundColor = "#222";

let secnumber = Math.trunc(Math.random() * 20) + 1;
console.log(secnumber);
let score = 20;
let highscore = 0;
// document.querySelector(".guessnum").textContent = secnumber;
// console.log(typeof Number(document.querySelector(".inputitem")));

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".inputitem").value);
  if (!guess) {
    document.querySelector(".message").textContent = "no number";
  } else if (guess > secnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too high!";
      document.querySelector(".inputitem").value = "";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost";
      document.querySelector("body").style.backgroundColor = " red";
      document.querySelector(".inputitem").value = "";

      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too low!";
      document.querySelector(".inputitem").value = "";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost";
      document.querySelector("body").style.backgroundColor = " red";
      document.querySelector(".inputitem").value = "";

      document.querySelector(".score").textContent = 0;
    }
  } else if (guess === secnumber) {
    document.querySelector(".message").textContent = "correct!";
    // document.querySelector(".inputitem").value = "";
    document.querySelector(".guessnum").textContent = secnumber;
    document.querySelector("body").style.backgroundColor = " #60b347";
    document.querySelector(".guessnum").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  secnumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "start guessing";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guessnum").textContent = "?";
  document.querySelector(".inputitem").value = "";
});

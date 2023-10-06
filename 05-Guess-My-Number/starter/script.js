'use strict';
const numberToGuess = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = number;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess === numberToGuess) {
    document.querySelector('.message').textContent = 'Correct number  ';
  } else if (guess > numberToGuess) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
    } else {
      document.querySelector('.message').textContent =
        'You have lost the game !';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < numberToGuess) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
    } else {
      document.querySelector('.message').textContent =
        'You have lost the game !';
      document.querySelector('.score').textContent = 0;
    }
  }
});

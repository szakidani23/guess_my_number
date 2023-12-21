'use strict';

let secretNumber = Math.trunc(Math.random() * 50 + 1);
let score = 7;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No guess
  if (!guess) {
    displayMessage('A number please...');
    // Win
  } else if (guess === secretNumber) {
    displayMessage('GG WELL DONE!😎 You Win!🏆');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.fontSize = '3.5rem';
    document.querySelector('.number').style.border = '.3rem solid #f2f2f2';
    document.querySelector('body').style.background = '#03ed3e';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // Wrong guess
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage(guess > secretNumber ? 'Too high..' : 'Too low..');
    } else {
      displayMessage('Out of lives 😞 You lost!');
      document.querySelector('body').style.background = 'rgb(94, 21, 21)';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Play again
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 50 + 1);
  score = 7;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.background =
    'linear-gradient(rgba(18, 18, 18, 0.875), rgb(18, 18, 18)), url(bg_1.webp) center no-repeat';
  document.querySelector('body').style.backgroundSize = 'cover';
  displayMessage('Lets play a game brah!');
});

'use strict';

let number = Math.trunc(Math.random() * 20) + 1;

let point = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input or number is 0
  if (!guess) {
    if (point > 1) {
      document.querySelector('.message').textContent = '⛔ No number!';
      point--;
      document.querySelector('.score').textContent = point;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    //When player wins
  } else if (guess === number) {
    document.querySelector('.number').textContent = number;
    document.querySelector('.message').textContent = '✔ Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (point > highscore) {
      highscore = point;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > number) {
    if (point > 1) {
      document.querySelector('.message').textContent = 'High 📈!';
      point--;
      document.querySelector('.score').textContent = point;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < number) {
    if (point > 1) {
      document.querySelector('.message').textContent = 'Low  📉!';
      point--;
      document.querySelector('.score').textContent = point;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  point = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = point;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

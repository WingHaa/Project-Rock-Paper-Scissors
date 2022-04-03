'use strict';
const userControl = document.querySelectorAll('.user');
const pcButtons = document.querySelectorAll('.pc');
const userScoreDiv = document.querySelector('.userScore');
const pcScoreDiv = document.querySelector('.pcScore');
const result = document.querySelector('.result');
const welcome = document.querySelector('.welcome');
const game = document.querySelector('.game');
const loseModal = document.querySelector('#loseModal')
const replayButton = document.querySelectorAll('#replay');
const homeButton = document.querySelectorAll('#homepage');
const startGame = document.querySelector('#startGame');
let userScore = 0;
let pcScore = 0;

userControl.forEach((button) => {
  button.addEventListener('click', playRound)
});

userControl.forEach((button) => {
  button.addEventListener('transitionend', removeTransition)
});

function removeTransition (e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('chosen'); //remove transition for user button
  pcButtons.forEach((button) => {  
    button.classList.remove('chosen'); //remove transition for pc button
  })
}

startGame.addEventListener('click', () => {
  welcome.style.display = 'none';
  game.style.display = 'flex';
});

replayButton.forEach((button) => {
  button.addEventListener('click', replay)
});

homeButton.forEach((button) => {
  button.addEventListener('click', chill)
});

function pcPlay () {
  let pcChoose = Math.floor(Math.random()*3 + 1);
  if (pcChoose == 1) return 'Rock'
  if (pcChoose == 2) return 'Paper'
  return 'Scissors'
}

function playRound (e) {
  let userSelection = e.target.value;
  let pcSelection = pcPlay();
  const userButton = document.querySelector(`#${e.target.id}`);
  const pcButton = document.querySelector(
    `.pcControl > #${pcSelection.toLowerCase()}`);
  userButton.classList.add('chosen')
  pcButton.classList.add('chosen')
  if ((userScore === 5) || 
    (pcScore === 5) ||
    (!userSelection)) return //ignore user clicking outside of button border
  if (userSelection === pcSelection) {
    return result.textContent =
      `It\'s a draw! We both drew ${pcSelection}`
  }
  let userWinCondition = false;
    if ((userSelection === 'Rock' && pcSelection === 'Scissors') || 
      (userSelection === 'Paper' && pcSelection === 'Rock') || 
      (userSelection === 'Scissors' && pcSelection === 'Paper')) {
          userWinCondition = true;
      }
  return getRoundWinner (userWinCondition, userSelection, pcSelection);
}

function getRoundWinner (userWinCondition, userSelection, pcSelection) {
  if (userWinCondition) {
      userScore = ++userScore;
      userScoreDiv.textContent = `${userScore}`;
      result.textContent = `You Win! ${userSelection} beats ${pcSelection}`
  } else{
      pcScore = ++pcScore;
      pcScoreDiv.textContent = `${pcScore}`;
      result.textContent = `You Lost! ${pcSelection} beats ${userSelection}`
  }
  return getMatchWinner (userScore, pcScore);
}

function getMatchWinner (userScore, pcScore) {
  if (userScore === 5) {
    return winModal.style.display = 'flex'
    }
  if (pcScore === 5) {
    return loseModal.style.display = 'flex'
  }
}

function replay () {
  userScore = 0; //reset the scores and result
  pcScore = 0;
  userScoreDiv.textContent = `${userScore}`;
  pcScoreDiv.textContent = `${pcScore}`;
  result.textContent = 'Choose your weapon!';
  loseModal.style.display = 'none';
  return winModal.style.display = 'none';
}

function chill () {
  userScore = 0;
  pcScore = 0;
  userScoreDiv.textContent = `${userScore}`;
  pcScoreDiv.textContent = `${pcScore}`;
  result.textContent = 'Choose your weapon!';
  loseModal.style.display = 'none';
  winModal.style.display = 'none';
  game.style.display = 'none';
  return welcome.style.display = 'flex';
}
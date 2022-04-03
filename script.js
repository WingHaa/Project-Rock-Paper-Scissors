'use strict';
const userControl = document.querySelectorAll('.player');
const pcButtons = document.querySelectorAll('.pc');
const userScoreDiv = document.querySelector('.playerScore');
const pcScoreDiv = document.querySelector('.pcScore');
const result = document.querySelector('.result');
const welcome = document.querySelector('.welcome');
const game = document.querySelector('.game');
const replayButton = document.querySelector('.replay');
const startGame = document.querySelector('#startGame');
let playerScore = 0;
let pcScore = 0;

userControl.forEach((button) => {
  button.addEventListener('click', playRound)
});

userControl.forEach((button) => {
  button.addEventListener('transitionend', removeTransition)
});

function removeTransition (e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('chosen'); //remove transition for player button
  pcButtons.forEach((button) => {  
    button.classList.remove('chosen'); //remove transition for pc button
  })
}

startGame.addEventListener('click', () => {
  welcome.style.display = 'none';
  game.style.display = 'flex';
});

replayButton.addEventListener('click', replay);

function pcPlay () {
  let pcChoose = Math.floor(Math.random()*3 + 1);
  if (pcChoose == 1) return 'Rock'
  if (pcChoose == 2) return 'Paper'
  return 'Scissors'
}

function playRound (e) {
  let playerSelection = e.target.value;
  let pcSelection = pcPlay();
  const playerButton = document.querySelector(`#${e.target.id}`);
  const pcButton = document.querySelector(
    `.pcControl > #${pcSelection.toLowerCase()}`);
  playerButton.classList.add('chosen')
  pcButton.classList.add('chosen')
  if ((playerScore === 5) || 
    (pcScore === 5) ||
    (!playerSelection)) return //ignore user clicking outside of button border
  if (playerSelection === pcSelection) {
    return result.textContent =
      `It\'s a draw! We both drew ${pcSelection}`
  }
  let playerWinCondition = false;
    if ((playerSelection === 'Rock' && pcSelection === 'Scissors') || 
      (playerSelection === 'Paper' && pcSelection === 'Rock') || 
      (playerSelection === 'Scissors' && pcSelection === 'Paper')) {
          playerWinCondition = true;
      }
  return getRoundWinner (playerWinCondition, playerSelection, pcSelection);
}

function getRoundWinner (playerWinCondition, playerSelection, pcSelection) {
  if (playerWinCondition) {
      playerScore = ++playerScore;
      userScoreDiv.textContent = `${playerScore}`;
      result.textContent = `You Win! ${playerSelection} beats ${pcSelection}`
  } else{
      pcScore = ++pcScore;
      pcScoreDiv.textContent = `${pcScore}`;
      result.textContent = `You Lost! ${pcSelection} beats ${playerSelection}`
  }
  return getMatchWinner (playerScore, pcScore);
}

function getMatchWinner (playerScore, pcScore) {
  if (playerScore === 5) {
    return result.textContent = 
      'Congratulation! You have beaten the game.'
    }
  if (pcScore === 5) {
    return result.textContent =
      'Oops! You failed. Better luck next time!'
  }
}

function replay () {
  playerScore = 0; //reset the scores and result
  pcScore = 0;
  userScoreDiv.textContent = `${playerScore}`;
  pcScoreDiv.textContent = `${pcScore}`;
  return result.textContent = '';
}
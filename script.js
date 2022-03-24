// User input their move
// let playerSelection = prompt('Make your move!', '');
let playerSelection = 'ROCK';
// Computer make its move
function randomFromOneToThree (max) {
    return Math.floor(Math.random()*max + 1)
}

let computerChoose = randomFromOneToThree(3);

function computerPlay () {
    if (computerChoose == 1) return 'Rock'
    if (computerChoose == 2) return 'Paper'
    return 'Scissors'
}

let computerSelection = computerPlay();
// Compute outcome
let playerScore = 0;
let computerScore = 0;
function roundScore () {
    if (playerSelection === computerSelection.toUpperCase()) return `It\'s a draw! We both drew ${computerSelection}`

    if (playerSelection === 'ROCK') {
        if (computerSelection === 'Paper') {
            computerScore = ++computerScore;
            return 'You Lose! Paper beats Rock'
        }
        if (computerSelection === 'Scissors') {
            playerScore = ++playerScore;
            return 'You Win! Rock beats Scissors'
        }
    }

    if (playerSelection === 'PAPER') {
        if (computerSelection === 'Scissors') {
            computerScore = ++computerScore;
            return 'You Lose! Scissors beats Paper'
        }
        if (computerSelection === 'Rock') {
            playerScore = ++playerScore;
            return 'You Win! Paper beats Rock'
        }     
    }

    if (playerSelection === 'SCISSORS') {
        if (computerSelection === 'Rock') {
            computerScore = ++computerScore;
            return 'You Lose! Rock beats Scissors'
        }
        if (computerSelection === 'Paper') {
            playerScore = ++playerScore;
            return 'You Win! Scissors beats Paper'
        }      
    }
}

let result = roundScore();

console.log(playerScore);
console.log(computerScore);
console.log(result);
// Make the game last 5 rounds
// Announce the winner
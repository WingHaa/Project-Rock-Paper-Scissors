// User input their move
const buttons = document.querySelectorAll('button');
const pScoreDiv = document.querySelector('.playerScore');
const cScoreDiv = document.querySelector('.computerScore');
const result = document.querySelector('.result');
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', playRound)
});

function computerPlay () {
    let computerChoose = Math.floor(Math.random()*3 + 1);
    if (computerChoose == 1) return 'Rock'
    if (computerChoose == 2) return 'Paper'
    return 'Scissors'
}

function playRound (e) {
    let playerSelection = e.target.id;
    let computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        return result.textContent =
            `It\'s a draw! We both drew ${computerSelection}`
    }

    if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || 
        (playerSelection === 'Paper' && computerSelection === 'Rock') || 
        (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
            playerWinCondition = true;
    } else playerWinCondition = false;
    roundDecider (playerWinCondition, playerSelection, computerSelection);
}

function roundDecider (playerWinCondition, playerSelection, computerSelection) {
    if (playerWinCondition) {
        playerScore = ++playerScore;
        pScoreDiv.textContent = `${playerScore}`;
        result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`
    } else{
        computerScore = ++computerScore;
        cScoreDiv.textContent = `${computerScore}`;
        result.textContent = `You Lost! ${computerSelection} beats ${playerSelection}`
    }
    matchDecider ();
}

function matchDecider () {
    if (playerScore === 5) return result.textContent = 
        'Congratulation! You have beaten the game.'
    if (computerScore === 5) return result.textContent =
        'Oops! You failed. Better luck next time!'
}
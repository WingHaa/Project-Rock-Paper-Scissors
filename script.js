// User input their move
const controlButton = document.querySelectorAll('.control');
const pScoreDiv = document.querySelector('.playerScore');
const cScoreDiv = document.querySelector('.computerScore');
const result = document.querySelector('.result');
const replayButton = document.querySelector('.replay');
let playerScore = 0;
let computerScore = 0;

controlButton.forEach((button) => {
    button.addEventListener('click', playRound)
});

replayButton.addEventListener('click', replay);

function computerPlay () {
    let computerChoose = Math.floor(Math.random()*3 + 1);
    if (computerChoose == 1) return 'Rock'
    if (computerChoose == 2) return 'Paper'
    return 'Scissors'
}

function playRound (e) {
    let playerSelection = e.target.value;
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
    getRoundWinner (playerWinCondition, playerSelection, computerSelection);
}

function getRoundWinner (playerWinCondition, playerSelection, computerSelection) {
    if (playerWinCondition) {
        playerScore = ++playerScore;
        pScoreDiv.textContent = `${playerScore}`;
        result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`
    } else{
        computerScore = ++computerScore;
        cScoreDiv.textContent = `${computerScore}`;
        result.textContent = `You Lost! ${computerSelection} beats ${playerSelection}`
    }
    return getMatchWinner (playerScore, computerScore);
}

function getMatchWinner (playerScore, computerScore) {
    if (playerScore === 5) {
        return result.textContent = 
        'Congratulation! You have beaten the game.'
    }
    if (computerScore === 5) {
        return result.textContent =
        'Oops! You failed. Better luck next time!'
    }
}

function replay () {
    playerScore = 0;
    computerScore = 0;
    pScoreDiv.textContent = `${playerScore}`;
    cScoreDiv.textContent = `${computerScore}`;
    return result.textContent = '';
}
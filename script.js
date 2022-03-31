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
    playerSelection = e.target.id;
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

    if (playerWinCondition) {
        playerScore = ++playerScore;
        pScoreDiv.textContent = `${playerScore}`;
        cScoreDiv.textContent = `${computerScore}`;
        return result.textContent =
            `You Win! ${playerSelection} beats ${computerSelection}`
    } else{
        computerScore = ++computerScore;
        pScoreDiv.textContent = `${playerScore}`;
        cScoreDiv.textContent = `${computerScore}`;
        return result.textContent =
            `You Lost! ${computerSelection} beats ${playerSelection}`
    }
}

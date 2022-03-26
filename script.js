// User input their move
// Computer make its move
function showPrompt () {
    return prompt('Pick between "Rock", "Paper" or "Scissors"','')
}

function formatPlayerInput () {
    let playerInput = showPrompt()
    return playerInput.trim().charAt(0).toUpperCase() + playerInput.trim().substring(1).toLowerCase()
}

function playerPlay () {
    return input = formatPlayerInput()
}

function randomOneToThree () {
    return Math.floor(Math.random()*3 + 1)
}

function computerPlay () {
    let computerChoose = randomOneToThree();
    if (computerChoose == 1) return 'Rock'
    if (computerChoose == 2) return 'Paper'
    return 'Scissors'
}

// Compute outcome

function playRound () {
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();

    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection === computerSelection) {
        return `It\'s a draw! We both drew ${computerSelection}`
    }
    
    let playerWinCondition = false;
    if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || 
        (playerSelection === 'Paper' && computerSelection === 'Rock') || 
        (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
            playerWinCondition = true;
        }
    if (playerWinCondition) {
        playerScore = ++playerScore;
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else{
        computerScore = ++computerScore;
        return `You Lost! ${computerSelection} beats ${playerSelection}`
    }
}
// Make the game last 5 rounds

function game() {
    for (let i = 0; i < 5; i++) {
        if (playerScore == 3 || computerScore == 3) {break;}
        let a = playRound();
        console.log(a);
    }
    if (playerScore > computerScore) return `Congratulation! You won! The score is ${playerScore}:${computerScore}`
    if (playerScore < computerScore) return `Too bad! You lost! The score is ${playerScore}:${computerScore}`
    return `It's a tie! The score is ${playerScore}:${computerScore}`
}

let playerScore = 0;
let computerScore = 0;
let result = game();
console.log(playerScore);
console.log(computerScore);
console.log(result);
// Announce the winner


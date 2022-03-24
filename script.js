// User input their move
// Computer input its move
function random1to3 (max) {
    return Math.floor(Math.random()*max + 1)
}

let computerChoose = random1to3(3);

function computerPlay () {
    if (computerChoose == 1) return 'Rock'
    if (computerChoose == 2) return 'Paper'
    if (computerChoose == 3) return 'Scissors'
}

let computerMove = computerPlay()
// Compute outcome
// Make the game last 5 rounds
// Announce the winner
let n = Math.floor(Math.random() * 3);

function getComputerChoice() {
    if(n == 0) {
        return("Rock");
    } else if(n == 1) {
        return("Paper");
    } else if(n == 2) {
        return("Scissors");
    } else {
        return("What happened?");
    }
}

const playerSelection = prompt("Rock, Paper, or Scissors?", " ").toLowerCase();
const computerSelection = getComputerChoice().toLowerCase();

function playRound() {
    if(playerSelection === computerSelection) {
        return("It's a draw!");
    } else if(playerSelection === "paper" && computerSelection === "rock" 
    || playerSelection === "rock" && computerSelection === "scissors" 
    || playerSelection === "scissors" && computerSelection === "paper") {
        return("Winner!")
    } else {
        return("Loser!")
    }
}

alert(playRound());
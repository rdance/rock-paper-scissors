let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
let roundTotal = 0;

for (; roundTotal < 5 ; ++roundTotal) {
function getComputerChoice() {
    let n = Math.floor(Math.random() * 3);
    if (n === 0) {
        return("rock");
    } else if (n === 1) {
        return("paper");
    } else if (n === 2) {
        return("scissors");
    } else {}
    
}

computerSelection = getComputerChoice();
playerSelection = prompt("Rock, Paper, or Scissors?", " ").toLowerCase();

function playRound() {
    if (playerSelection === computerSelection) {
        alert("It's a tie!");
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore = ++playerScore;
        alert("Winner! " + (playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()) + " beats " + (computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase()));
    } else if (
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissors" && playerSelection === "paper")
    ) {
        computerScore = ++computerScore;
        alert("Loser! " + (computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase()) + " beats " + (playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()));
    } else {}
}
playRound();
console.log(playerScore);
console.log(computerScore);

function game() {
    if (roundTotal === 4 && playerScore === computerScore) {
        alert("Tie Game! Final Score is Player " + playerScore + " Computer " + computerScore)
    } else if (roundTotal === 4 && playerScore > computerScore) {
        alert("Player beats Computer! Final Score is Player " + playerScore + " Computer " + computerScore)
    } else if (roundTotal === 4 && computerScore > playerScore) {
        alert("Computer beats Player! Final Score is Player " + playerScore + " Computer " + computerScore)
    } else {}
}
game();
}
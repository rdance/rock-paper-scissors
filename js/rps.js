let n = Math.floor(Math.random() * 3);

function getComputerChoice() {
    if(n == 0) {
        return("Rock");
    } else if(n == 1) {
        return("Paper");
    } else if(n == 2) {
        return("Scissors");
    } else {
        return("What happened?")
    }
}

console.log(getComputerChoice());

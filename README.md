# rock-paper-scissors
This is my first javascript project that I am creating from scratch. It is going to be a "simple rock paper scissors" game that will be run in the broswer console.

3. getComputerChoice
Randomly return either 'Rock', 'Paper', or 'Scissors'
    get random number(n) 0-2 and assign it to n
    if n = 0 return rock
    if n = 1 return paper
    if n = 2 return scissors

4. playRound
Play a round and declare the winner
    take manual playerSelection case-insensitive
    take computerSelection from getComputerChoice function
    compare them using the rules of the game
        if rock vs scissors, rock wins
        if rock vs paper, paper wins
        if scissors vs paper, scissors wins
    return a string that declares the winner/loser

6. game
Play a 5 round game that keeps score and reports a winner or lose at the end
    loop playRound function until 5 games have been played
    create playerScore and computerScore variables and add 1 to them each time the respective player wins
    once 5 games have been played see which player has the highest score and declare a winner & loser
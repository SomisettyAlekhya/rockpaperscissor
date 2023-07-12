const buttons1 = document.querySelectorAll("button");

const result1 = document.getElementById("answer");

const playerScore1= document.getElementById("userscore");

const computerScore1 = document.getElementById("computerscore");

let playerScore = 0;
let computerScore = 0;

buttons1.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerPlay());
    result1.textContent = result;
    
  });
});

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")) {
    playerScore++;
    playerScore1.textContent = playerScore;
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else {
    computerScore++;
    computerScore1.textContent = computerScore;
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}
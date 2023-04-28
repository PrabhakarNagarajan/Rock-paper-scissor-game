const rock = document.querySelector("rock-container");
const paper = document.querySelector("paper-container");
const scissor = document.querySelector("scissor-container");

// console.log("hello World");

function getComputerChoice() {
  const gameGenrate = ["rock", "paper", "scissor"];
  const computerChoice =
    gameGenrate[Math.floor(Math.random() * gameGenrate.length)];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection !== "rock" || computerSelection !== "rock") {
    return "tie";
  } else {
    return "wrong selection";
  }
}

const playerSelection = "paper";
const computerSelection = getComputerChoice();
console.log(playRound());

console.log(getComputerChoice());

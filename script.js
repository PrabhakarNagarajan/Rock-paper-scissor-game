const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
const win = "You win ";
const lose = "You Lose";
const tie = "Match tie";

rock.addEventListener("click", () => {
  playerSelection = "rock";
  computerSelection = getComputerChoice();
  console.log(playerSelection);
  playRound(playerSelection, computerSelection);
  updateScore();
});
paper.addEventListener("click", () => {
  playerSelection = "paper";
  computerSelection = getComputerChoice();
  console.log(playerSelection);
  playRound(playerSelection, computerSelection);
  updateScore();
});
scissor.addEventListener("click", () => {
  playerSelection = "scissor";
  computerSelection = getComputerChoice();
  console.log(playerSelection);
  playRound(playerSelection, computerSelection);
  updateScore();
});

function getComputerChoice() {
  const generateValue = ["rock", "paper", "scissor"];
  const computergenerate =
    generateValue[Math.floor(Math.random() * generateValue.length)];
  return computergenerate;
}
getComputerChoice();

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log("tie");
    return tie;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissor" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissor")
  ) {
    computerScore++;
    console.log("Computer 1 point");
  } else if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    playerScore++;
    console.log("Player 1 point");
  } else {
    console.log("wrong one");
  }
}

function game() {}
game();
// console.log(game);

// playRound(playerSelection, computerSelection);
// console.log(playRound());

function updateScore() {
  const playerScore1 = document.getElementById("player-score");
  const computerScore1 = document.getElementById("computer-score");
  const scoreTie = document.getElementById("tie-score");

  playerScore1.textContent = `Player :${playerScore}`;
  computerScore1.textContent = `Computer :${computerScore}`;

  function winner() {
    if (playerScore >= 5) {
      alert("Player wins");
    } else if (computerScore >= 5) {
      alert("computer wins");
    }
  }
  winner();
  // scoreTie.textContent = `${}`;
}
const updater = updateScore();
updater();

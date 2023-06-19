const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const playersChoice = document.getElementById("players-choice");
const computerChoice = document.getElementById("computer-choice");

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
const tie = "Match tie";

rock.addEventListener("click", () => {
  playerSelection = "rock";
  computerSelection = getComputerChoice();
  playersChoice.textContent = `player selected ${playerSelection}`;
  computerChoice.textContent = `Computer selected ${computerSelection}`;
  console.log(playerSelection);
  playRound(playerSelection, computerSelection);
  updateScore();
});
paper.addEventListener("click", () => {
  playerSelection = "paper";
  computerSelection = getComputerChoice();
  playersChoice.textContent = `player selected ${playerSelection}`;
  computerChoice.textContent = `Computer selected ${computerSelection}`;
  console.log(playerSelection);
  playRound(playerSelection, computerSelection);
  updateScore();
});
scissor.addEventListener("click", () => {
  playerSelection = "scissor";
  computerSelection = getComputerChoice();
  playersChoice.textContent = `player selected ${playerSelection}`;
  computerChoice.textContent = `Computer selected ${computerSelection}`;
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

// function game() {}
// game();
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
      // openModal();
      alert("Player wins");
      document.location.reload();
    } else if (computerScore >= 5) {
      // openModal();
      alert("computer wins");
      document.location.reload();
    }
  }

  winner();
}
updateScore();

// const openModal = function () {
//   // console.log('Button clicked');
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// const closeModal = function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

// btnCloseModal.addEventListener("click", closeModal);
// overlay.addEventListener("click", closeModal);

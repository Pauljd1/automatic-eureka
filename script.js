const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const results = document.getElementById("results");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) return "Rock";
  else if (randomNum === 1) return "Paper";
  else return "Scissors";
}

function playRound(humanChoice, computerChoice) {
  let roundResult = "";

  if (humanChoice === computerChoice) {
    roundResult = "It's a draw!";
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    roundResult = "You win this round!";
    humanScore++;
  } else {
    roundResult = "You lose this round!";
    computerScore++;
  }

  results.textContent = `
    You picked ${humanChoice}! and 
    Computer picked ${computerChoice}!
    ${roundResult}  -
    You: ${humanScore}  Computer: ${computerScore}
  `;
}
rock.addEventListener("click", () => playRound("Rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("Paper", getComputerChoice()));
scissors.addEventListener("click", () =>
  playRound("Scissors", getComputerChoice())
);

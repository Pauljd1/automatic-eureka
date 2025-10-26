let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) return "Rock";
  else if (randomNum === 1) return "Paper";
  else return "Scissors";
}

function getHumanChoice() {
  let choice = prompt("Rock, Paper, or Scissors?").toLowerCase();
  if (choice === "rock") return "Rock";
  else if (choice === "paper") return "Paper";
  else if (choice === "scissors") return "Scissors";
  else {
    console.log("Invalid choice. Please type Rock, Paper, or Scissors.");
    return getHumanChoice();
  }
}

function playRound(humanChoice, computerChoice) {
  console.log(`You picked ${humanChoice}.`);
  console.log(`Computer picked ${computerChoice}.`);

  if (humanChoice === computerChoice) {
    console.log("It's a draw!");
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    console.log("You win this round!");
    humanScore++;
  } else {
    console.log("You lose this round!");
    computerScore++;
  }

  console.log(`Score — You: ${humanScore}, Computer: ${computerScore}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

for (let i = 0; i < 5; i++) {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
}

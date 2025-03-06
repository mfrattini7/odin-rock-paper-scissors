const POINTS_TO_WIN = 5;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const roundResultDiv = document.getElementById("round-result-div");
const scoreDiv = document.getElementById("score-div");
const finalResultDiv = document.getElementById("final-result-div");

let humanScore = 0;
let computerScore = 0;
let humanChoice = null;

rockBtn.onclick = () => { 
    playRound("rock", getComputerChoice());
    showOutput();
}

paperBtn.onclick = () => { 
    playRound("paper", getComputerChoice());
    showOutput();
}

scissorsBtn.onclick = () => { 
    playRound("scissors", getComputerChoice());
    showOutput();
}

function getHumanChoice() {
    const humanChoice = prompt("Your choice:");
    console.log("Human choice:", humanChoice);
    return humanChoice;
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];
    console.log("Computer choice:", computerChoice);
    return computerChoice;
}

function playRound(humanChoice, computerChoice) {
    
    if (humanChoice === "rock") {
        
        if (computerChoice === "rock") {
            draw()
        } else if (computerChoice === "paper") {
            computerWins();
        } else if (computerChoice === "scissors") {
            humanWins();
        } else {
            unreachable();
        }

    } else if(humanChoice === "paper") {

        if (computerChoice === "rock") {
            humanWins();
        } else if (computerChoice === "paper") {
            draw()
        } else if (computerChoice === "scissors") {
            computerWins();
        } else {
            unreachable();
        }
        
    } else if(humanChoice === "scissors") {

        if (computerChoice === "rock") {
            computerWins();
        } else if (computerChoice === "paper") {
            humanWins();
        } else if (computerChoice === "scissors") {
            draw();
        } else {
            unreachable();
        }
        
    } else {
        unreachable();
    }
}

function humanWins() {
    roundResultDiv.innerText = "Human wins the round!";
    humanScore++;
}

function computerWins() {
    roundResultDiv.innerText = "Computer wins the round!";
    computerScore++;
}

function draw() {
    roundResultDiv.innerText = "It's a draw!";
}

function unreachable() {
    throw Error("This should never happen...");
}

function showOutput() {
    scoreDiv.innerText = "Human: " + humanScore + "\tComputer: " + computerScore;

    if (humanScore === POINTS_TO_WIN) {
        finalResultDiv.innerText = "Human wins!";
        disableInputs();
    } else if(computerScore === POINTS_TO_WIN) {
        finalResultDiv.innerText = "Computer wins!";
        disableInputs();
    } else {
        unreachable();
    }
}

function disableInputs() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

let humanScore = 0;
let computerScore = 0;


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
    humanChoice = humanChoice.toLowerCase();
    
    if (humanChoice === "rock") {
        
        if (computerChoice === "rock") {
            draw()
        } else if (computerChoice === "paper") {
            computerWins();
        } else if (computerChoice === "scissors") {
            humanWins();
        } else {
            console.error("This should never happen...");
        }

    } else if(humanChoice === "paper") {

        if (computerChoice === "rock") {
            humanWins();
        } else if (computerChoice === "paper") {
            draw()
        } else if (computerChoice === "scissors") {
            computerWins();
        } else {
            console.error("This should never happen...");
        }
        
    } else if(humanChoice === "scissors") {

        if (computerChoice === "rock") {
            computerWins();
        } else if (computerChoice === "paper") {
            humanWins();
        } else if (computerChoice === "scissors") {
            draw();
        } else {
            console.error("This should never happen...");
        }
        
    } else {
        console.error("Invalid choice!");
    }
}

function humanWins() {
    console.log("Human wins!")
    humanScore++;
}

function computerWins() {
    console.log("Computer wins!")
    computerScore++;
}

function draw() {
    console.log("It's a draw!")
}

function printScore(humanScore, computerScore) {
    console.log("Human: " + humanScore + "\tComputer: " + computerScore);
}

function playGame() {
    const ngames = 5;
    for (let i = 0; i < ngames; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        printScore(humanScore, computerScore)
    }
    console.log("Final score: ")
    printScore(humanScore, computerScore)
}

playGame();

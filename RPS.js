//Create function called computerPlay where computer takes no inputs and randomly returns either Rock, Paper, or Scissors
let computerPlay = () => {
    const rpsArray = ["rock", "paper", "scissors"];
    return rpsArray[Math.floor(Math.random()*rpsArray.length)];
}
//Create a function that plays a round of RPS and picks a winner by taking two inputs, player input(case-insensitive) and computer selection and returns a string
// Create rules within function, ie. Rock beats Scissors, Paper beats Rock, Scissors beats Paper
let oneRound = (playerSelection,computerSelection) =>{
    const playerPick = playerSelection.toLowerCase();
    if (playerPick === "rock"){
        if (computerSelection === "rock"){
            return "It's a tie. Both picked Rock.";
        }
        else if (computerSelection === "scissors"){
            return "You win. Rock beats Scissors.";
        }
        else return "You lose. Rock loses to Paper."
    }
    else if (playerPick === "scissors"){
        if (computerSelection === "rock"){
            return "You lose. Scissors loses to Rock.";
        }
        else if (computerSelection === "scissors"){
            return "It's a tie. Both picked Scissors.";
        }
        else return "You win. Scissors beats Rock."
    }
    else if (playerPick === "paper"){
        if (computerSelection === "rock"){
            return "You win. Paper beats Rock.";
        }
        else if (computerSelection === "scissors"){
            return "You lose. Paper loses to Scissors.";
        }
        else return "It's a tie. Both picked Paper.";
    }
    else return "Invalid player input";
}
//Define paramaters for the one round function
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(oneRound(playerSelection,computerSelection));
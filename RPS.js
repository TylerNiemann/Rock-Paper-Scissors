let playerScore = 0;
let computerScore = 0;

let computerPlay = () => {
    const rpsArray = ["rock", "paper", "scissors"];
    return rpsArray[Math.floor(Math.random()*rpsArray.length)];
}

let oneRound = (playerPick,computerSelection) =>{
    if (playerPick === "rock"){
        if (computerSelection === "rock"){
        return "It's a tie. Both picked Rock.";
        }
        else if (computerSelection === "scissors"){
        playerScore = playerScore + 1;          
        return "You win this round. Rock beats Scissors.";
        }
        else {
            computerScore = computerScore + 1;
            return "You lose this round. Rock loses to Paper."
        }
    }
    else if (playerPick === "scissors"){
        if (computerSelection === "rock"){
            computerScore = computerScore + 1;
            return "You lose this round. Scissors loses to Rock.";
        }
        else if (computerSelection === "scissors"){
            return "It's a tie. Both picked Scissors.";
        }
        else {
            playerScore = playerScore + 1;
            return "You win this round. Scissors beats Paper."
        }
            }
    else if (playerPick === "paper"){
        if (computerSelection === "rock"){
            playerScore = playerScore + 1;
            return "You win this round. Paper beats Rock.";
        }
        else if (computerSelection === "scissors"){
            computerScore = computerScore + 1;
            return "You lose this round. Paper loses to Scissors.";
        }
        else return "It's a tie. Both picked Paper.";
    }
    else return "Invalid player input. Please input Rock, Paper, or Scissors.";
}

function clickedButton(e){
    console.log(this)
    console.log(oneRound(this.value,computerPlay()));
}

const btn = Array.from(document.querySelectorAll('button'));
btn.forEach(button => button.addEventListener('click', clickedButton));
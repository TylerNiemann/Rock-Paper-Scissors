let playerTally = 0;
let computerTally = 0;
let computerPlay = () => {
    const rpsArray = ["rock", "paper", "scissors"];
    return rpsArray[Math.floor(Math.random()*rpsArray.length)];
}
function disableButtons() {
    btn.forEach(elem => {
        elem.disabled = true
    })
}

function playerWon(){
    disableButtons();
    return roundResults.textContent = ("You won!");
}

function playerLost(){
    disableButtons();
    return roundResults.textContent = ("You lost!");
}

function playerScore(){
    playerTally += 1;
    document.querySelector('.playerResults').textContent = `Player Score: ${playerTally}`;
}
function computerScore(){
    computerTally += 1;
    document.querySelector('.computerResults').textContent = `Computer Score: ${computerTally}`;
}

let oneRound = (playerPick,computerSelection) =>{
    if (playerPick === "rock"){
        if (computerSelection === "rock"){
        return roundResults.textContent = "It's a tie. Both picked Rock.";
        }
        else if (computerSelection === "scissors"){
            playerScore();          
            return roundResults.textContent = "You win this round. Rock beats Scissors.";
        }
        else {
            computerScore();
            return roundResults.textContent = "You lose this round. Rock loses to Paper."
        }
    }
    else if (playerPick === "scissors"){
        if (computerSelection === "rock"){
            computerScore();
            return roundResults.textContent = "You lose this round. Scissors loses to Rock.";
        }
        else if (computerSelection === "scissors"){
            return roundResults.textContent = "It's a tie. Both picked Scissors.";
        }
        else {
            playerScore(); 
            return roundResults.textContent = "You win this round. Scissors beats Paper."
        }
            }
    else if (playerPick === "paper"){
        if (computerSelection === "rock"){
            playerScore(); 
            return roundResults.textContent = "You win this round. Paper beats Rock.";
        }
        else if (computerSelection === "scissors"){
            computerScore();
            return roundResults.textContent = "You lose this round. Paper loses to Scissors.";
        }
        else return roundResults.textContent = "It's a tie. Both picked Paper.";
    }
}

const resultContainer = document.querySelector('#round');
const roundResults = document.createElement('div');
resultContainer.appendChild(roundResults);

function clickedButton(e){
    (oneRound(this.value,computerPlay()))
    if (playerTally === 5)playerWon();
    else if(computerTally === 5)playerLost();
};

const btn = Array.from(document.querySelectorAll('button'));
btn.forEach(button => button.addEventListener('click', clickedButton));


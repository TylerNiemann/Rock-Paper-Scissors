//Create function called computerPlay where computer takes no inputs and randomly returns either Rock, Paper, or Scissors
let computerPlay = () => {
    const rpsArray = ["rock", "paper", "scissors"];
    return rpsArray[Math.floor(Math.random()*rpsArray.length)];
}
//Create a function that plays a round of RPS and picks a winner by taking two inputs, player input(case-insensitive) and computer selection and returns a string
// Create rules within function, ie. Rock beats Scissors, Paper beats Rock, Scissors beats Paper
//Create function game that plays 5 rounds of RPS keeping score and declaring an overall winner at the end
//I defined oneRound function into the game function so that it could receive game's local scope
let game = ()=>{
    let round = 0;
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        round ++;
        let oneRound = (playerSelection,computerSelection) =>{
            const playerPick = playerSelection.toLowerCase();
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
        console.log(oneRound(prompt("Type Rock, Paper, or Scissors"),computerPlay()));    
        if(round === 5 && playerScore > computerScore){
            return `You are the overall winner having won ${playerScore} rounds.`       
        }
        else if(round === 5 && computerScore > playerScore){
            return `The computer is the overall winner having won ${computerScore} rounds.`
        }
        else if(round === 5 && computerScore === playerScore){
            return `It's a tie with both you and the computer winning ${playerScore} rounds.`
        }    
    }
}
console.log(game());
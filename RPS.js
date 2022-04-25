//Create function called computerPlay where computer takes no inputs and randomly returns either Rock, Paper, or Scissors
let computerPlay = () => {
    const rpsArray = ["Rock", "Paper", "Scissors"];
    return rpsArray[Math.floor(Math.random()*rpsArray.length)];
}
console.log(computerPlay());
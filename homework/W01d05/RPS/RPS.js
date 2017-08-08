var userChoice = "";
var computerChoice = "";
var playerWins = 0;
var computerWins = 0;

// function to compare the choices
var compare = function(choice1, choice2) {
  var result = "";
  if(choice1 === choice2) {
    result = "It's a Tie";
  } else if(choice1 === "rock") {
    if(choice2 === "scissors") {
      result = "You win!";
      // rock wins and adds one to the user score whenever they win a round
      playerWins++;
    } else {
      result = "You lose! Try again.";
      // paper wins and adds one to the computer score whenever they win a round
      computerWins++;
    }
  } else if(choice1 === "paper") {
    if(choice2 === "rock") {
      result = "You win!";
        // paper wins
      playerWins++;
    } else {
        // scissors wins
      result = "You lose! Try again.";
      computerWins++;
    }
  } else if(choice1 === "scissors") {
    if(choice2 === "rock") {
      result = "You lose! Try again.";
      // rock wins
      computerWins++;
    } else {
      result = "You win!";
      playerWins++;
    }
  }
  alert(result);
}

// loop over the game

while(playerWins<3 && computerWins<3){
  userChoice = prompt("Please choose Rock, Paper or Scissors");
  computerChoice = Math.random();
  alert("user: " + userChoice);
  if(computerChoice  < 0.34) {
    computerChoice = "rock";
  } else if(computerChoice <= 0.67) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  alert("CPU: "+ computerChoice);
  compare(userChoice, computerChoice);
  if (playerWins == 3 ){
    alert("Player wins");
  }else if (computerWins == 3) {
    alert("computer wins");
  } 
}
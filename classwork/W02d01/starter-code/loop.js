var engineeringClass = ["greg", "joe", "naren", "melson", "will", "kane", "dino", "melinda","sabirin"]
//-----Simple pring names----
for(var i=0;i<engineeringClass.length;i++) {
  console.log(engineeringClass[i]);
  }

//------ simple print name and stop when greg appears----
  var person = 0
  var currenPerson = "";
  while (engineeringClass[person] !="greg") {
   currenPerson = engineeringClass[person];
   console.log(currenPerson);person++;
  }

  //----- loops for objects in the class room -----
  var classRoom = { 
    cups: 8, macs: 9, books: 5, newsPaper: true, waterColour: "clear"
    
  };
  console.log(classRoom)
  
  for (var keys in classRoom) {
  console.log(keys)
  console.log(classRoom[keys])
  }



  function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}
function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}
function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove) {
        winner = "tie";
    } else if ((playerMove === "rock" && computerMove === "scissors") || (playerMove === "paper" && computerMove === "rock") || (playerMove === "scissors" && computerMove === "paper")) {
        winner = "player";
    } else {
        winner = "computer";
    } return winner;
}
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    while(playerWins < 5 && computerWins < 5) {
        var pMove = getPlayerMove();
        var cMove = getComputerMove();
        var winner = getWinner(pMove, cMove);
        if (winner === "player") {
            playerWins ++;
            console.log ("You won that game with  ---" + pMove + "---  against  ---"  + cMove + "---  [SCORES] (" + playerWins + ") to you and ("  + computerWins + ") to the  computer");
        } else if (winner === "computer") {
            computerWins ++;
            console.log ("You lost that game with  ---" + pMove + "---  against  ---"  + cMove + "---  [SCORES] (" + playerWins + ") to you and ("  + computerWins + ") to the  computer");
        } else if (winner === "tie") {
            console.log ("That was a tie with  ---" + pMove + "---  [SCORES] (" + playerWins + ") to you and (" + computerWins + ") to the  computer");
        }
    }
    return [playerWins, computerWins];
}
playToFive()
----*/
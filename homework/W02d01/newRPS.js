
function userInput() {
    alert("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function computerInput() {
    var computerChoice = Math.random();
    if (computerChoice < 0.33) {
        return "rock";
    } else if (computerChoice < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
function firstToThree() {
    alert("You ready to play first To 3 Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    while(playerWins < 3 && computerWins < 3) {
        var userChoice = userPlay();
        var computerPick = cpuPlay();
        var winner = compare(userChoice, computerPick);
        if (winner === "player") {
            playerWins ++;
            alert ("You won that game  " + "[SCORES]: " + "Player" + "  (" + playerWins + ")  " + "--- VS ---"  + "  CPU" + "  (" + computerWins + ")");
        } else if (winner === "computer") {
            computerWins ++;
            alert ("You lost that game  " + "[SCORES]: " + "Player" + "  (" + playerWins + ")  " + "--- VS ---" + "  CPU" + "  (" + computerWins + ")");
        } else if (winner === "tie") {
            alert ("That was a tie  " + "[SCORES]: " + "Player" + "  (" + playerWins + ")  " + "--- VS ---" + "  CPU" + "  (" + computerWins + ")");
        }
    }
    return [playerWins, computerWins];
}
function userPlay(play) {
    return play || userInput();
}
function cpuPlay(play) {
    return play || computerInput();
}
function compare(choice1,choice2) {
    var winner;
    if (choice1 === choice2) {
        winner = "tie";
    } else if ((choice1 === "rock" && choice2 === "scissors") || (choice1 === "paper" && choice2 === "rock") || (choice1 === "scissors" && choice2 === "paper")) {
        winner = "player";
    } else {
        winner = "computer";
    } return winner;
}

firstToThree()

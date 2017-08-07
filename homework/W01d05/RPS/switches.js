var userChoice = parseInt(prompt("Do you choose rock, paper, or scissors?"));
var computerChoice = Math.random();
//---Computer choices---
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}   
console.log("Computer: ", computerChoice);
alert(computerChoice);
var choice1 = userChoice;
var choice2 = computerChoice;

switch (computerChoice) {
	case "rock":
	choice1 !== "rock"
	alert("That isn't rock, paper or scissors. What kind of game do you think your playing? Choose better next time.");
    var userChoice = prompt("Now choose correctly. Do you choose rock, paper, or scissors?")
    var computerChoice = Math.random();
}
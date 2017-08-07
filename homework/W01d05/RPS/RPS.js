var userChoice;
var computerChoice;
main();

function getChoices(){
	userChoice = parseInt(prompt("Please choose Rock, Paper or Scissors"));
	computerChoice = Math.random()
	console.log (['User:', userChoice])

	//---RPS choices---
	if (computerChoice < 0.34) {
	computerChoice = "rock";
	} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
	} else {
	computerChoice = "scissors";
	} 

	//---RPSLS choices---
	// if (computerChoice < 0.19) {
	// computerChoice = "rock";
	// } else if(computerChoice > 0.20 && computerChoice <= 0.39) {
	// computerChoice = "paper";
	// } else if(computerChoice > 0.40 && computerChoice <= 0.59) {
	// computerChoice = "scissors";
	// } else if(computerChoice > 0.60 && computerChoice <= 0.79) {
	// computerChoice = "lizard";
	// } else {
	// computerChoice = "spock";
	console.log ('Computer:', computerChoice)
	alert(computerChoice);
}

function main(){
	getChoices ();
	var result = compare(userChoice, computerChoice);
	if (result === "Tie") {
	alert("This is a Tie");
	main();
	}
	alert ("The result is:", result);
}

function compare (choice1, choice2){
	if (choice1 != "Rock" && choice1 != "Paper" && choice1 != "Scissors") {
		return "Player playing a different game", choice1, "is not valid";
	}
	else if (choice1 === choice2) {
        return "It's a tie!";
    }
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            // rock wins
            return "You win!";
        } else {
            // paper wins
            return "You lose! Try again.";
        }
    }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            // paper wins
            return "You win!";
        } else {
            // scissors wins
            return "You lose! Try again.";
        }
    }
    else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            // rock wins
            return "You lose! Try again.";
        } else {
            // scissors wins
            return "You win!";
        }
    }
    alert ("The result is:", result);
    getChoices();
}

/*----
//--- second attempt ----

function main (){
	var 
}
if (choice1 !== "rock") {
        if (choice1 !== "paper") {
            if (choice1 !== "scissors") {
                // alert("That isn't rock, paper or scissors. What kind of game do you think your playing? Try again.");
                var userChoice = prompt("Now choose correctly. Do you choose rock, paper, or scissors?")
	        }
	    }
	}

Array.prototype.compare = function(choice1, choice2)
{
	if (choice1 !== "rock") {
		return false;
        if (choice1 !== "paper") {
        	return false;
            if (choice1 !== "scissors") {
            	return false;
                alert("That isn't rock, paper or scissors. What kind of game do you think your playing? Try again.");
                var userChoice = prompt("Now choose correctly. Do you choose rock, paper, or scissors?")
	        }
	    }
	}
	var compare = function(choice1,choice2) {
        if (choice1 === choice2) {
                return "It's a tie!";
            }
            if (choice1 === "rock") {
                if (choice2 === "scissors") {
                    // rock wins
                    return "You win!";
                } else {
                    // paper wins
                    return "You lose! Try again.";
                }
            }
            if (choice1 === "paper") {
                if (choice2 === "rock") {
                    // paper wins
                    return "You win!";
                } else {
                    // scissors wins
                    return "You lose! Try again.";
                }
            }
            if (choice1 === "scissors") {
                if (choice2 === "rock") {
                    // rock wins
                    return "You lose! Try again.";
                } else {
                    // scissors wins
                    return "You win!";
                }
            }
        console.log (compare(choice1, choice2));
        }


console.log (compare(choice1, choice2));
alert (compare(choice1, choice2));

-----//first attempt//----
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2)
{
    if(choice1 === choice2)
    {
        return "The result is a tie!";       
    }
    else if(choice1 === "rock")
    {
        if(choice2 === "scissors")
        {
            return "rock wins";
        }
        else
        {
            return "paper wins";   
        }
    }
    else if(choice1 === "paper")
    {
        if(choice2 === "rock")
        {
            return "paper wins";
        }
        else
        {
            return "scissors wins";    
        }
    } alert (compare(choice1, choice2))
}
----*/
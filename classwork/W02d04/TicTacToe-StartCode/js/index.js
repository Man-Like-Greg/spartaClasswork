$(function(event) {
	// console.log("you here"); // this is to test when we are here

	// ------------------- Initial variables for the game ------

	// find the game squares
	var $boxes = $("td");
	// console.log($boxes); // this provides all the td's aka boxes

	// Screen for player turn
	var $turnText = $(".playerTurn");
	// console.log($turnText);

	// counter for moves and wins
	var counter = 0;
	var winCounter = 0;

	// console.log(counter, winCounter); // this will display [1, 0] in the console

	// Arrays to track the moves of players
	var OMoves = [];
	var XMoves = [];

	//an array winning combinations
	var winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
	// console.log(winningCombinations); displays all winning combs


	/////------------- 2nd section function -----------

	// function to run on page load
		function start() {
			// call function to add X and O box listeners
			addXandOListeners(); // begin game

			// call function to setup reset listener
			addResetListener(); // end game to start again
			// removeXandOListeners(); // this removes them on but it should not be in the start function
		}
		

	/////------------- 3rd section function -----------

	// the function to set up X and O listeners
		function addXandOListeners() {
			console.log("X's and O's listeners called")
			//Counting down in a FOR loop
			for (var i = $boxes.length - 1; i >= 0; i--) {
				var $box = $($boxes[i]);
				$box.on("click", addXorO);
			}

		}

	/////------------- 4th section function -----------

	// function to remove all the box's event listeners 
		function removeXandOListeners() {
			for (var i = $boxes.length - 1; i >= 0; i--) {
				var $box = $($boxes[i])
				$box.off("click", addXorO);
			}
		}

	/////------------- 5th section function -----------

	// the function to setup the reset listeners
		function addResetListener() {
			console.log("reset listener function"); //
			$("#reset").on("click", resetBoard)
			//
		}

	/////------------- 6th section function -----------

	// function to add X or O to screen
		function addXorO() {
			console.log("adding X's or O's"); // when a box is click it will display in the console
			var $box = $(this);
			// console.log($box); this will show the whole tag of the box
			// checks IF the box has already been played
			if ($box.html().length === 0) {
				// IF the counter is even then its O's
				if (counter % 2 === 0) {
					// taking the data-num from the square and push into OMoves Arrays
					OMoves.push(parseInt($box.attr("data-num")));
					// console.log(OMoves);//this checks the OMoves
					$box.html("O").attr("class","O");
					// changes the text display 
					$turnText.html("It is X\'s turn");
					counter++; // the counter makes it switch 
					checkWin(OMoves, "O"); //this call the check for win function after each turn
				} else {
					XMoves.push(parseInt($box.attr("data-num")));
					console.log(XMoves);//this checks the XMoves
					// console.log(OMoves);//this checks the OMoves
					$box.html("X").attr("class","X");
					// changes the text display 
					$turnText.html("It is O\'s turn");
					counter++;	// the counter makes it switch 
					checkWin(XMoves, "X"); //this call the check for win function after each turn
				}
				// cater for a drew if counter >=9 then is a drew
				if (counter >=9) {
					$turnText.html("Game Over - It's a Tie!");
				}
			}
		}

	/////------------- 7th section function -----------

	// function to check to see whos won
		function checkWin(movesArray, name) {
			// this is the loop to check all the winning combs array
			for (var i = 0; i < winningCombinations.length; i++) {
				winCounter = 0
				// this is the loop to chect inside the winning combs array
				for (var j = 0; j < winningCombinations[i].length; j++) {
					if (movesArray.indexOf(winningCombinations[i][j]) !== -1) {
						winCounter++
					}
					if (winCounter === 3) {
						$turnText.html("Game Over	" + "Player " + name + "	Wins");
						removeXandOListeners(); //stops the game from going forward because there is a WIN
					}

				}
			}
		}

	/////------------- 8th section function -----------

	// function to do the reset of the board
		function resetBoard() {
			// console.log("reset board"); // this is to check if the button is working and display in console
			for (var i = $boxes.length - 1; i >= 0; i--) {
				var $box = $($boxes[i]);
				$box.html("").attr("class", "clear");
			}
			// Reset all starting variables
			OMoves = [];
			XMoves = [];
			winCounter = 0;
			counter = 0;
			addXandOListeners();
			$turnText.html("It is 0\'s turn");
		}

	start();

})
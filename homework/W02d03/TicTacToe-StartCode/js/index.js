// find the grid
var boxes = $("td");
// get players
var player1 = [];
var player2 = [];
// find clear button
var clearBoard = $("#reset")
// find the number of turns
var whosTurn;

// functions for the jQuery to work
$(function (event) {
	// function for the each player to make a move
	$(boxes).each(function(index, box){
	  console.log($(box).attr("data-num")); // show the data numbers on the console
	  	// assign the player1 moves to the grid
	  	$(box).on("click", function() {
	  		if (whosTurn = true) {
	  			player1.push($(box).attr("data-num"));
	  			$(box).addClass("X").html("X");
	  			whosTurn = false;
	  			console.log(player1);
	  		}
		
		}) 
	})
	

	// assign the player1 moves to the grid
	
	// assign the player2 moves to the grid

	// functions for win combination
		// array of the winning statements 


	// function to clear the board


	// Bouns Round: 
		// while loop to play best of three
			// var playerWins
		// if statement for winner and creating new elements to display 



})




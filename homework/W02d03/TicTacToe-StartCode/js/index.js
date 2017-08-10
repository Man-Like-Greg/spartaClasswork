// find the grid
var boxes = $("td");
// get players
var player1 = [];
var player2 = [];
// find clear button
var clearBoard = $("#reset")
// who's turn
var whosTurn;
// array of the winning statements 
var winningCombinations =[[0,1,2],[3,4,5],[6,7,8],[1,4,7],[0,4,8],[2,5,8],[0,3,6],[2,4,6]];


// functions for the jQuery to work
$(function (event) {
	// function for the each player to make a move
	$(boxes).each(function(index, box){
	  // console.log($(box).attr("data-num")); // show the data numbers on the console
	  	// assign the player1 moves to the grid
	  	$(box).on("click", function() {
	  		if (whosTurn = true) {
	  			player1.push($(box).attr("data-num"));
	  			$(box).addClass("X").html("X");
	  			whosTurn = false;
	  			console.log(player1);
	  		} 
	  		// assign the player2 moves to the grid
	  		else if (whosTurn = null) {
	  			console.log("you here")
	  			player2.push($(box).attr("data-num"));
	  			$(box).addClass("O").html("O");
	  			whosTurn = true;
	  			console.log(player2);
	  		}
		}) 
	})

	// functions for win combination
	function compare(compValue,players){
	
	for(var i=0;i<winningCombinations.length;i++){
		logic(compValue,i,player);

	}
}
	function compare(player1Combination,player1Score);

	// function to clear the board


	// Bouns Round: 
		// while loop to play best of three
			// var playerWins
		// if statement for winner and creating new elements to display 



})




// $ at the start of the code will make it a jQuery:
$(function (event) {
	// console.log("DOM is ready for you, but are you ready!!") // notifys the DOM is working
	var count = $("#count"); //give us the Element id-count
	// console.log(count); // selects the count span in the HTML file

	var items = $("li"); // give us all the list 
	// console.log(items);

	// var done = document.querySelectorAll("li.done");
	var done = $("li.done");
	// console.log(done);

	// making a new list element called New Items
	var li = $("<li>New Item</li>");
	$("#list").append(li); //||// $("#list").append("<li>New Item</li>) 

	// to send name to the top
	$("#list").prepend("<li>New Item</li>");

	var todos = ["food shop", "wash clothes", "pay bills"];
	$(todos).each(function(index, todo) {
		if (index === 2){
			// console.log(todo)// finds the 
		}
	})

	// changing the count number on the html
	var a = $("#count").html();
	// console.log(a);
	// is the same as:
	$("#count").html("5");

	$("#count").css("color", "blue")

	$("li").addClass("done");

	$("#count").html("10").css("color" ,"red")

	var button = $("<button id=\"myButton\">Click Me</button>");
	$("body").append(button);

	$("#myButton").on("click", function() {
		console.log("button clicked");
	})




	// body...
})
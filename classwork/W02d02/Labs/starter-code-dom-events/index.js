// write code here
document.addEventListener("DOMContentLoaded", function(){
//------------- BUTTONS
	var button = document.getElementById("myButton");
	// console.log(button);
	function buttonClicked(){
		console.log("button was Clicked")
	}
	button.addEventListener("click", buttonClicked);

//--------- FORMS
	var myForm = document.getElementById("myForm");
	myForm.addEventListener("submit", function(event) {
		console.log(this);
		event.preventDefault();
		var firstnameField = document.getElementById('firstname');
        console.log(firstnameField);
        if (!firstnameField.value) {
        	console.log("you must enter firstname")
        } 
		console.log("for submitted")
	})

//--------- THIS
	var buttons = document.querySelectorAll("myButtons");
	for (var i = 0; i < buttons.length; i++) {
	 	var b = buttons[i]
	 	b.addEventListener("click", function(event) {
	 		console.log(this.value + "was Clicked")
	 	})
	}
})




// Setup initial state variables

// Variables defined in global scope, not the best idea

// Setup eventListeners

// Functions for calculator

document.addEventListener("DOMContentLoaded", function(){
	//------------- BUTTONS
	var buttons = document.getElementsByClassName("number");
	var operators = document.getElementsByClassName("operator");
	var screen = document.getElementsByClassName("display");
	var clear = document.getElementsByClassName("clear");
	var equals = document.getElementsByClassName("eq");
	var elements = document.getElementsByTagName("input");
	var numberOne = null;
	var numberTwo = null;

	for (var i=0; i < buttons.length; i++) {
    var b = buttons[i];
    b.addEventListener("click", function(event){
        console.log(this.value + "  was clicked");
        }) 
    }
	for (var i=0; i<operators.length; i++) {
	    var b = operators[i];
	    b.addEventListener("click", function(event){
	        console.log(this.value + " was clicked");
	    })
	}
	for (var i=0; i<clear.length; i++) {
		var b = clear[i];
	    b.addEventListener("click", function(event){
	        console.log(this.value + " was clicked");
	    })
	}
	for (var i=0; i<equals.length; i++) {
		var b = equals[i];
	    b.addEventListener("click", function(event){
	        console.log(this.value + " was clicked");
	    })
	}
	for(var i=0; i<elements.length; i++){
		  if(elements[i].innerHTML === "="){
			    elements[i].addEventListener("click", calculate(i));
			    console.log(this.value + " was clicked");
		}	else {
			   elements[i].addEventListener("click", addToCurrentValue(i));
			   console.log(this.value + " was clicked");
		}
	}
	clear.onclick = function () {
    screen.innerHTML = "";
    console.log(this.value + " was clicked");
  	}
 //  	function newDiv(text){
	//     var newDiv= document.createElement("div");
	//     newDiv.className="save";
	//     newDiv.innerHTML=text;
	//     document.body.ul.li.appendChild(newDiv);
	// }
  	function addToCurrentValue (i){
		return function() {
			if (elements[i].innerHTML === "/") {
               screen.innerHTML  +=  "/ " ;
      		}	else if(elements[i].innerHTML === "x"){
			      screen.innerHTML += "*";
		   	} else {
			   	screen.innerHTML  += elements[i].innerHTML;
		   	}
		}
	}
	function equals(){
			if (operators === "+") {
				var sum = numberOne + numberTwo;
				console.log(sum);
			} else if (operators === "-") {
				var sum = numberOne - numberTwo;
				console.log(sum);
			} else if (operators === "/") {
				var sum = numberOne / numberTwo;
				console.log(sum);
			} else if (operators === "x") {
				var sum = numberOne * numberTwo;
				console.log(sum);
			}
		}
   	function calculate(i) {
    	return function () {
        	screen.innerHTML = equals(screen.innerHTML);    		
  		}
	}
	
	


})

				

// function add(number1, number2){
 //    	return number1 + number2
	// }
	// function subtract(number1, number2) {
 //    	return number1 - number2
	// }
	// function divide(number1, number2) {
 //    	return number1 / number2
	// }
	// function multiply(number1, number2) {
 //    	return number1 * number2
	// }
	// function Clear() {
	// 	var Current = "0";
 //   		document.Calculator.Display.value = Current;
 //   	}


// buttonClicked();
// 	function buttonClicked(){
// 		console.log("button was Clicked")
	
// 			for (var i = 0; i < buttons.length; i++) {
// 			 	var b = buttons[i]
// 			 	b.addEventListener("click", function(event) {
// 			 		console.log(this.value + "was Clicked")
// 			 	})
// 			} buttons.addEventListener("click", buttonClicked);
// 		} 
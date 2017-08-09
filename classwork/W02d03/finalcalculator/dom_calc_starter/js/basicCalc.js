//Set initial state variables

//find numbers
var numbers = document.getElementsByClassName("number");
// console.log(numbers);

//find operators
var operators = document.getElementsByClassName("operator");
// console.log(numbers);

//find equals
var eq = document.getElementsByClassName("eq")[0];
// console.log(eq);

//find clear
var clear = document.getElementsByClassName("clear")[0];
// console.log(clear);

//find display
var display = document.getElementsByClassName("display")[0];
// console.log(display);

//variable for firstNumber in calculation
var firstNumber = null;
// console.log("firstNumber", firstNumber);

//variable for secondNumber in calculation
var secondNumber = null;
// console.log("secondNumber", secondNumber);

//variable for operator clicked
var operator = null;
// console.log("operator", operator);

//variable for answer of calculations
var answer = null;
// console.log("answer", answer);

//-------------1st section----------------

//setup event listeners
function setUpEventListeners() {
	for (var i=0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", upDateAndDisplayNumber)
       
    }
	for (var i=0; i < operators.length; i++) {
    operators[i].addEventListener("click", upDateAndDisplayOperator)
       
    }
    eq.addEventListener("click", function() {
    	calculation(firstNumber, operator, secondNumber);
    })
    clear.addEventListener("click", function() {
    	clearCalculator()
    })

}
//Functions for calculator
//add
function add(firstNumber, secondNumber) {
	// console.log("getting here")
	return firstNumber + secondNumber;
}
//subtract
function subtract(firstNumber, secondNumber) {
	// console.log("getting here")
	return firstNumber - secondNumber;
}
//divide
function divide(firstNumber, secondNumber) {
	// console.log("getting here")
	return firstNumber / secondNumber;
}
//multiply
function multiply(firstNumber, secondNumber) {
	// console.log("getting here")
	return firstNumber * secondNumber;
}

//--------------------------

//calculation functions
function calculation(first_Number, operator, second_Number) {
	console.log(firstNumber, operator, secondNumber)
}

//---------------------------------------------

//clear the calculator
function clearCalculator() {
	console.log(clearCalculator)
}

//display and store buttons clicked
function upDateAndDisplayNumber(){
	console.log("button clicked");
	console.log("this", this);
//display and store the operators 
}
function upDateAndDisplayOperator(){
	console.log("button clicked");
	console.log("this", this);

}



setUpEventListeners();





/*------- 
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
----*/
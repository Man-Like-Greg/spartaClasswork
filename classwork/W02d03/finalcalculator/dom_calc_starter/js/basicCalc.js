//*-------------1st section----------------*//
//-------find numbers
var numbers = document.getElementsByClassName("number");
// console.log(numbers);

//-------find operators
var operators = document.getElementsByClassName("operator");
// console.log(numbers);

//--------find equals
var eq = document.getElementsByClassName("eq")[0];
// console.log(eq);

//--------find clear
var clear = document.getElementsByClassName("clear")[0];
// console.log(clear);

//-------find display
var display = document.getElementsByClassName("display")[0];
// console.log(display);

//----------variable for firstNumber in calculation
var firstNumber = null;
// console.log("firstNumber", firstNumber);

//---------variable for secondNumber in calculation
var secondNumber = null;
// console.log("secondNumber", secondNumber);

//-----------variable for operator clicked
var operator = null;
// console.log("operator", operator);

//-----------variable for answer of calculations
var answer = null;
// console.log("answer", answer);

//*-------------2nd section----------------*//

//---------------setup event listeners------------------
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
//-----------------Functions for calculator-------------
//--------add
function add(firstNumber, secondNumber) {
	// console.log("getting here") // testing to see if it gets to here
	return firstNumber + secondNumber;
}
//--------subtract
function subtract(firstNumber, secondNumber) {
	// console.log("getting here") // testing to see if it gets to here
	return firstNumber - secondNumber;
}
//--------divide
function divide(firstNumber, secondNumber) {
	// console.log("getting here") // testing to see if it gets to here
	return firstNumber / secondNumber;
}
//---------multiply
function multiply(firstNumber, secondNumber) {
	// console.log("getting here") // testing to see if it gets to here
	return firstNumber * secondNumber;
}
//------------------calculation functions------------------
function calculation(first_Number, operator, second_Number) {
	switch (operator) {
		case "+":
			display.value = add(firstNumber, secondNumber);
			break;
		case "-":
			display.value = subtract(firstNumber, secondNumber);
			break;
		case "/":
			display.value = divide(firstNumber, secondNumber);
			break;
		case "x":
			display.value = multiply(firstNumber, secondNumber);
			break;
	}
}
//----------------clear the calculator-------------------------
function clearCalculator() {
	firstNumber = null;
	secondNumber = null;
	operator = null;
	display.value = "";
	// console.log(firstNumber, secondNumber, operator) // this shows null null null 
}
//------------display and store buttons clicked------------------
function upDateAndDisplayNumber(){
	// console.log("button clicked"); // tells you when a button is clicked
	var button = this.value;
	display.value = button;
	if (firstNumber == null) {
		firstNumber = parseFloat(button)
		// console.log("1st ",firstNumber); // to show 1st number
	} else {
		secondNumber = parseFloat(button);
		// console.log("2nd", secondNumber); // to show 2nd number
	}
//-----------display and store the operators------------------------
}
function upDateAndDisplayOperator(){
	// console.log("button clicked"); ////tells you when its clicked
	operator = this.value;
	display.value = operator;
	// console.log(operator); //// to show the operator 
}


setUpEventListeners();

/*-----
///----- this is for testing the operation functions
var result = add(4, 2)
console.log(result)
------*/

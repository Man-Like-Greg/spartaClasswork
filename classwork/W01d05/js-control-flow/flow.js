var moneyInpocket = parseInt(prompt("What's your bank account saying:"));

if (moneyInpocket > 500000) {
	console.log("You can afford a Farrari");
} else if (moneyInpocket < 250000 && moneyInpocket < 500000){
	console.log("Get a BMW");
} else {
	console.log("Go and stack more money bro");
}

switch (moneyInpocket) {
	case 10:
		console.log("Beer");
		break;
	case 20:
		console.log("Vodka");
		break;
	case 30:
		console.log("Brandy");
		break;
	case 40:
		console.log("Moet Champagne");
		break;
}

// if (something) console.log("Doing something")
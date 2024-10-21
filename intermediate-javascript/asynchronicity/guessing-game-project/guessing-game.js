const readline = require("readline");
const readlineInterface = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

/**
 * This function generates a random number between max and min
 * given values and return that number.
 *
 * @param {number} min
 *     This is the minimum value for the given number.
 *
 * @param {number} max
 *     This is the maximum value for the given number.
 *
 * @returns
 *     the random number generated between max and min values.
 */
function randomInBetween(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * This function checks for the entered number if it is too high
 * or too low or equal to the secretNumber and returns string
 * indicating these cases "Too High", "Too Low" or "Correct!"
 *
 * @param {number} enteredNum
 *     This is the number entered by the user.
 *
 * @param {number} secretNumber
 *     This is the secret number chosen by the computer.
 *
 * @param {number} attempts
 *     number of attempts remaining for the user to guess the
 *     secret number.
 *
 * @returns
 *     a boolean indicating if the enteredNumber is equal to
 *     the secretNumber or not.
 */
function checkGuess(enteredNum, secretNumber, attempts) {
	if (secretNumber === enteredNum) {
		console.log("Correct!");
		return true;
	} else if (secretNumber < enteredNum) {
		console.log(`Too High .. Attempts Remaining: ${attempts}`);
		return false;
	} else {
    console.log(`Too Low .. Attempts Remaining: ${attempts}`);
		return false;
	}
}

/**
 * This function ask the user to enter a guess for the number
 * and then uses the checkGuess function to check if the
 * entered number is equal to the secret number or not.
 *
 * @param {number} secretNumber
 *     This is the secret number chosen by the computer.
 *
 * @param {number} attempts
 *     number of attempts allowed for the user to guess the
 *     secret number.
 */
function askGuess (secretNumber, attempts) {
  if (attempts === 0) {
    readlineInterface.close();
    console.log("You lost the game 😔😔");
    return;
  }
  readlineInterface.question("Enter a guess: ", (answer) => {
		if (checkGuess(Number(answer), secretNumber, attempts - 1)) {
			console.log("You win 🚀🚀🚀");
			readlineInterface.close();
		} else {
			askGuess(secretNumber, attempts - 1);
		}
	});
}

/**
 * This function This method should ask the user to enter a
 * minimum number and then ask them to enter a maximum number.
 *
 * @param {number} attempts
 *     number of attempts allowed for the user to guess the
 *     secret number.
 */
function askRange(attempts) {
	readlineInterface.question("Enter a min number: ", (minAsString) => {
		readlineInterface.question("Enter a max number: ", (maxAsString) => {
			// console.log("I'm thinking of a number between " + minAsString + " and " + maxAsString + "...");
			console.log(
				`I'm thinking of a number between ${minAsString} and ${maxAsString}...`
			);
			const minAsNumber = Number(minAsString);
			const maxAsNumber = Number(maxAsString);
			const secretNumber = randomInBetween(minAsNumber, maxAsNumber);
			askGuess(secretNumber, attempts);
		});
	});
}

/**
 * This function asks the user to enter a limit for his attempts
 * trying to guess the secretNumber.
 */
function askLimit() {
  readlineInterface.question(
    "In How many attempts you can guess the correct Number? ",
    (limit) => {
      askRange(limit);
    }
  );
}

askLimit();

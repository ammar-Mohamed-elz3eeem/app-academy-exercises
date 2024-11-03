const keypress = require('keypress');
const Command = require('./command');

class Screen {
	/**
	 * This is the number of columns that the screen has.
	 */
	static numCols = 0;

	/**
	 * This is the number of rows that the screen has.
	 */
	static numRows = 0;

	/**
	 * This is the grid that represents the game grid.
	 */
	static grid = [];

	/**
	 * This is the character that separate lines.
	 */
	static borderChar = " ";

	/**
	 * This is the number of spacer that line has.
	 */
	static spacerCount = 1;

	/**
	 * @todo needs documentation.
	 */
	static gridLines = true;

	/**
	 * This is the default text color for the screen.
	 */
	static defaultTextColor = "\x1b[37m"; // white color

	/**
	 * This is the default background color for the screen.
	 */
	static defaultBackgroundColor = "\x1b[40m"; // black color

	/**
	 * This is the colors of text that screen has.
	 */
	static textColors = [];

	/**
	 * This is the background colors for the screen.
	 */
	static backgroundColors = [];

	/**
	 * This is the message to show on the screen.
	 */
	static message = "";

	/**
	 * This is the message to show on the screen when the
	 * quit command is fired.
	 */
	static quitMessage = "";

	/**
	 * This is commands to process.
	 */
	static commands = {};

	/**
	 * This is a flag indicates whether or not the game is
	 * initialized.
	 */
	static initialized = false;

	/**
	 * This method initializes the game components (grid, backgrounds,
	 * etc..)
	 *
	 * @param numCols
	 *     This is the number of columns the game needs to be
	 *     rendered.
	 *
	 * @param numRows
	 *     This is the number of rows the game needs to be
	 *     rendered.
	 */
	static initialize(numRows, numCols) {
		Screen.numRows = numRows;
		Screen.numCols = numCols;

		Screen.grid = [];
		Screen.textColors = [];
		Screen.backgroundColors = [];

		for (let row = 0; row < numRows; row++) {
			Screen.grid.push(new Array(numCols).fill(" "));
			Screen.textColors.push(new Array(numCols).fill(Screen.defaultTextColor));
			Screen.backgroundColors.push(
				new Array(numCols).fill(Screen.defaultBackgroundColor)
			);
		}

		Screen.setQuitMessage("\nThank you for playing! \nGoodbye.\n");
		const quitCmd = new Command("q", "quit the game", Screen.quit);
		Screen.commands["q"] = quitCmd;

		Screen.initialized = true;

		Screen.waitForInput();
	}

	/**
	 * This method sets the flag gridLines
	 *
	 * @param gridLines
	 *     This is a boolean flag indicating whether or not
	 *     to put lines around the grid.
	 */
	static setGridlines(gridLines) {
		Screen.gridLines = gridLines;
		Screen.render();
	}

	/**
	 * This method prints the commands that the game had.
	 */
	static printCommands() {
		console.log("");

		for (let cmd in Screen.commands) {
			let description = Screen.commands[cmd].description;
			console.log(`  ${cmd} - ${description}`);
		}

		console.log("");
	}

	/**
	 * This method waits for the user to input a command.
	 */
	static waitForInput() {
		keypress(process.stdin);

		process.stdin.on("keypress", function (ch, key) {
			if (!key) {
				console.log("Warning: Unknown keypress");
			} else if (!Screen.commands.hasOwnProperty(key.name)) {
				Screen.render();
				console.log(`${key.name} not supported.`);
				Screen.printCommands();
			} else {
				Screen.commands[key.name].execute();
				Screen.render();
			}
		});

		process.stdin.setRawMode(true);
		process.stdin.resume();
	}

	/**
	 * This method changes the given cell using its row & col and
	 * set its value with the given char.
	 *
	 * @param row
	 *     This is the row to go to.
	 *
	 * @param col
	 *     This is the col in the given row to go to.
	 *
	 * @param char
	 *     This is the char to put in the given cell row & col.
	 */
	static setGrid(row, col, char) {
		if (!Screen.initialized) return;

		if (char.length !== 1) {
			throw new Error("invalid grid character");
		}
		console.log("row and column =", row, col);
		Screen.grid[row][col] = char;
	}

	/**
	 * This method adds a command to the commands list.
	 *
	 * @param key
	 *     This is the key of the command to add.
	 *
	 * @param description
	 *     This is the description of the command to add.
	 *
	 * @param action
	 *     This is the action to fire when the given key is
	 *     pressed.
	 */
	static addCommand(key, description, action) {
		if (key === "q") {
			throw new Error("you cannot overwrite 'q'");
		}

		Screen.commands[key] = new Command(key, description, action);
	}

	/**
	 * This method sets the quit message of the Screen class.
	 *
	 * @param message
	 *     This is the quit message to use when the quit
	 *     command is called.
	 */
	static setQuitMessage(quitMessage) {
		Screen.quitMessage = quitMessage;
	}

	/**
	 * This method fires when the q key is pressed to quit
	 * the game.
	 *
	 * @param showMessage
	 *     a flag to indicate whether or not to show the
	 *     quit message.
	 */
	static quit(showMessage = true) {
		if (showMessage) console.log(Screen.quitMessage);
		process.exit(1);
	}

	/**
	 * This method renders the grid and prints it in the console.
	 */
	static render() {
		if (!Screen.initialized) return;

		const spacer = new Array(Screen.spacerCount).fill(" ").join("");

		console.clear();

		let borderLength = Screen.numCols * (Screen.spacerCount * 2 + 1) + 2;
		if (Screen.gridLines) borderLength += Screen.numCols - 1;
		let horizontalBorder = new Array(borderLength)
			.fill(Screen.borderChar)
			.join("");

		console.log(horizontalBorder);

		for (let row = 0; row < Screen.numRows; row++) {
			const rowCopy = [...Screen.grid[row]];

			for (let col = 0; col < Screen.numCols; col++) {
				let textColor = Screen.textColors[row][col]
					? Screen.textColors[row][col]
					: "";
				let backgroundColor = Screen.backgroundColors[row][col]
					? Screen.backgroundColors[row][col]
					: "";
				if (!(textColor && backgroundColor)) textColor = "\x1b[0m";

				let vertLine = Screen.gridLines && col > 0 ? "|" : "";
				rowCopy[
					col
				] = `${Screen.defaultBackgroundColor}${vertLine}\x1b[0m${textColor}${backgroundColor}${spacer}${rowCopy[col]}${spacer}\x1b[0m`;
			}

			if (Screen.gridLines && row > 0) {
				let horizontalGridLine = new Array(rowCopy.length * 4 - 1).fill("-");
				horizontalGridLine.unshift(
					`${Screen.borderChar}${Screen.defaultBackgroundColor}`
				);
				horizontalGridLine.push(`\x1b[0m${Screen.borderChar}`);
				console.log(horizontalGridLine.join(""));
			}

			// console.log(rowCopy);

			rowCopy.unshift(`${Screen.borderChar}`);
			rowCopy.push(`${Screen.borderChar}`);

			console.log(rowCopy.join(""));
		}

		console.log(horizontalBorder);

		console.log("");

		console.log(Screen.message);
	}

	/**
	 * This method sets the text color of the given cell.
	 *
	 * @param row
	 *     This is the row to set its text color.
	 *
	 * @param col
	 *     This is the column to set its text color.
	 *
	 * @param color
	 *     This is the color to set to text in the given
	 *     cell.
	 */
	static setTextColor(row, col, color) {
		if (!Screen.initialized) return;

		const colorCodes = {
			black: "\x1b[30m",
			red: "\x1b[31m",
			green: "\x1b[32m",
			yellow: "\x1b[33m",
			blue: "\x1b[34m",
			magenta: "\x1b[35m",
			cyan: "\x1b[36m",
			white: "\x1b[37m",
		};

		let code = colorCodes[color];

		if (!code) {
			throw new Error("Invalid color");
		}

		Screen.textColors[row][col] = code;
	}

	/**
	 * This method sets the background color of the given cell.
	 *
	 * @param row
	 *     This is the row to set its background color.
	 *
	 * @param col
	 *     This is the column to set its background color.
	 *
	 * @param color
	 *     This is the color to set to background in the given
	 *     cell.
	 */
	static setBackgroundColor(row, col, color) {
		if (!Screen.initialized) return;

		const colorCodes = {
			//background color
			blackBg: "\x1b[40m",
			redBg: "\x1b[41m",
			greenBg: "\x1b[42m",
			yellowBg: "\x1b[43m",
			blueBg: "\x1b[44m",
			cyanBg: "\x1b[46m",
			whiteBg: "\x1b[47m",
			magentaBg: "\x1b[45m",
		};

		let code = colorCodes[color + "Bg"];

		if (!code) {
			throw new Error("Invalid background color");
		}

		Screen.backgroundColors[row][col] = code;
	}

	/**
	 * This method sets the message of the Screen class.
	 *
	 * @param msg
	 *     This is the message to assign to the Screen message
	 */
	static setMessage(msg) {
		Screen.message = msg;
	}
}

module.exports = Screen;
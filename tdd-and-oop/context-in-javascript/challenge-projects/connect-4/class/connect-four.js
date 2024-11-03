const Screen = require("./screen");
const Cursor = require("./cursor");

class ConnectFour {
	constructor() {
		this.playerTurn = "O";

		this.grid = [
			[" ", " ", " ", " ", " ", " ", " "],
			[" ", " ", " ", " ", " ", " ", " "],
			[" ", " ", " ", " ", " ", " ", " "],
			[" ", " ", " ", " ", " ", " ", " "],
			[" ", " ", " ", " ", " ", " ", " "],
			[" ", " ", " ", " ", " ", " ", " "],
		];

		this.cursor = new Cursor(6, 7);

		// Initialize a 6x7 connect-four grid
		Screen.initialize(6, 7);
		Screen.setGridlines(true);

		// Replace this with real commands
		// Screen.addCommand('t', 'test command (remove)', ConnectFour.testCommand);
		Screen.addCommand(
			"left",
			"move disc to the left",
			this.cursor.left.bind(this.cursor)
		);
		Screen.addCommand(
			"right",
			"move disc to the right",
			this.cursor.right.bind(this.cursor)
		);
		Screen.addCommand("return", "drop the disc to the board", () => {
			const row = ConnectFour.dropDisc(
				this.cursor.row,
				this.cursor.col,
				this.playerTurn
			);
			if (ConnectFour.checkWin(Screen.grid)) {
				ConnectFour.endGame(this.playerTurn);
			} else {
				this.playerTurn = this.playerTurn === "X" ? "O" : "X";
			}
		});

		this.cursor.setBackgroundColor();
		Screen.render();
	}

	static dropDisc(row, col, char) {
		if (Screen.numRows < row + 1) {
			return;
		}
		let insertInRow = 0;
		for (let i = 0; i < Screen.numRows; i++) {
			if (Screen.grid[i][col] === " ") {
				insertInRow = i;
			}
		}
		if (Screen.grid[insertInRow][col] !== " ") {
			return;
		}
		Screen.setGrid(insertInRow, col, char);
		if (char === "X") {
			Screen.setTextColor(insertInRow, col, "magenta");
		} else if (char === "O") {
			Screen.setTextColor(insertInRow, col, "blue");
		}
		return insertInRow;
	}

	static checkWin(grid) {
		// 0. create a flag to indicate if the game is finished or not.
		let isFinished = false;
		let isTie = true;

		// 1. loop through the whole board
		for (let i = 0; i < grid.length; i++) {
			for (let j = 0; j < grid[i].length; j++) {
				if (grid[i][j] !== " ") {
					if (this.fourInRow(grid, i, j)) {
						return grid[i][j];
					}

					if (this.fourInColumn(grid, i, j)) {
						return grid[i][j];
					}

					if (this.fourInNegativeDiagonal(grid, i, j)) {
						return grid[i][j];
					}

					if (this.fourInPositiveDiagonal(grid, i, j)) {
						return grid[i][j];
					}
				} else {
					isTie = false;
				}
			}
		}

		return isTie ? "T" : false;
	}

	static fourInRow(grid, row, col) {
		let consecutiveCount = 0;

		for (let i = col; i < grid[row].length; i++) {
			if (grid[row][col] === grid[row][i]) {
				consecutiveCount++;
			} else {
				break;
			}
		}

		return consecutiveCount >= 4;
	}

	static fourInColumn(grid, row, col) {
		let consecutiveCount = 0;

		for (let i = row; i < grid.length; i++) {
			if (grid[i][col] === grid[row][col]) {
				consecutiveCount++;
			} else {
				break;
			}
		}

		return consecutiveCount >= 4;
	}

	static fourInPositiveDiagonal(grid, row, col) {
		let consecutiveCount = 0;
		let j = col;

		for (let i = row; i < grid.length; i++) {
			if (j > grid[i].length) break;
			if (grid[i][j] === grid[row][col]) {
				consecutiveCount++;
			} else {
				break;
			}
			j++;
		}

		return consecutiveCount >= 4;
	}

	static fourInNegativeDiagonal(grid, row, col) {
		let consecutiveCount = 0;
		let j = col;

		for (let i = row; i > -1; i--) {
			if (j > grid[i].length) break;
			if (grid[i][j] === grid[row][col]) {
				consecutiveCount++;
			} else {
				break;
			}
			j++;
		}

		return consecutiveCount >= 4;
	}

	static endGame(winner) {
		if (winner === "O" || winner === "X") {
			Screen.setMessage(`Player ${winner} wins!`);
		} else if (winner === "T") {
			Screen.setMessage(`Tie game!`);
		} else {
			Screen.setMessage(`Game Over`);
		}
		Screen.render();
		Screen.quit();
	}
}

module.exports = ConnectFour;

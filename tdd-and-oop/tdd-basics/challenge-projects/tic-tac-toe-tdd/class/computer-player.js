const TTT = require("./ttt");

class ComputerPlayer {
	/**
	 * This method takes the grid that represents the game board
	 * and returns an array of all valid moves that computer can
	 * take.
	 *
	 * @param {string[][]} grid
	 *     This is the grid that represents the game board.
	 *
	 * @returns {{row: number, col: number}[]}
	 *     an array of all valid moves that computer can take.
	 */
	static getValidMoves(grid) {
		// Your code here
		const validMoves = [];

		for (let i = 0; i < grid.length; i++) {
			for (let j = 0; j < grid[i].length; j++) {
				if (grid[i][j] === " ") {
					validMoves.push({ row: i, col: j });
				}
			}
		}

		return validMoves;
	}

	/**
	 * This method returns a random move from the list
	 * of all valid moves.
	 *
	 * @param {string[][]} grid
	 *     This is the grid that represents the game board.
	 *
	 * @returns {{col: number, row: number}}
	 *     a random move from the list of all valid moves.
	 */
	static randomMove(grid) {
		const allMoves = ComputerPlayer.getValidMoves(grid);
		return allMoves[Math.floor(Math.random() * allMoves.length)];
	}

	/**
	 * This function checks if the upcoming move would get a win
	 * for either player or computer and if it does it returns
	 * the row and column for that move. If upcoming move will not
	 * get win then null is returned.
	 *
	 * @param {string[][]} grid
	 *     This is a multidimensional array 3x3 that represents
	 *     the game board.
	 *
	 * @param {'X'|'O'} symbol
	 *     This is the current player turn.
	 *
	 * @returns
	 *     return the row and column if the upcoming move for either
	 *     the player or the computer would end the game by win.
	 *     If the upcoming move will not let the player or computer
	 *     win the game so the returned value will be null;
	 */
	static getWinningMoves(grid, symbol) {
		const playerTurn = symbol === "X" ? "O" : "X";

		for (let { row, col } of ComputerPlayer.getValidMoves(grid)) {
			grid[row][col] = symbol;
			if (TTT.checkWin(grid) === symbol) {
				grid[row][col] = " ";
				return { row, col };
			}

			grid[row][col] = playerTurn;
			if (TTT.checkWin(grid) === playerTurn) {
				grid[row][col] = " ";
				return { row, col };
			}

			grid[row][col] = " ";
		}

		return null;
	}

	/**
	 * This method recursively calculate the best score when moving
	 * "X" and "O" on the empty spots on the board.
	 *
	 * @param {string[][]} grid
	 *     This is a multidimensional array 3x3 that represents
	 *     the game board.
	 *
	 * @param {'X'|'O'} symbol
	 *     This is the symbol that indicates the player turn either
	 *     "X" or "O".
	 *
	 * @param {number} currentScore
	 *     This is the current high score to determine according to
	 *     it if the move is best or not.
	 *
	 * @param {boolean} playerTurn
	 *     This is a boolean indicating if this is the player move
	 *     or the computer.
	 *
	 * @returns
	 *     the best score after playing the game and calculate
	 *     different scores recursively.
	 */
	static minimax(grid, symbol, currentScore = 0, playerTurn = false) {
		// Your code here
		const gameScore = TTT.checkWin(grid);
		const nextTurn = symbol === "X" ? "O" : "X";
		if (gameScore === symbol) return 10 - currentScore;
		if (gameScore === nextTurn) return currentScore - 10;
		if (gameScore === "T") return 0;

		if (!playerTurn) {
			let bestScore = -Infinity;
			for (let { row, col } of ComputerPlayer.getValidMoves(grid)) {
				grid[row][col] = symbol;
				let score = ComputerPlayer.minimax(
					grid,
					symbol,
					currentScore + 1,
					true
				);
				grid[row][col] = " ";
				bestScore = Math.max(bestScore, score);
			}
			return bestScore;
		} else {
			let minScore = Infinity;
			for (let { row, col } of ComputerPlayer.getValidMoves(grid)) {
				grid[row][col] = nextTurn;
				let score = ComputerPlayer.minimax(
					grid,
					symbol,
					currentScore + 1,
					false
				);
				grid[row][col] = " ";
				minScore = Math.min(minScore, score);
			}
			return minScore;
		}
	}

	/**
	 * This method loops through all the empty spots on the given
	 * grid and start calculating the best score if put the symbol
	 * in the current spot and for the highest score ever it
	 * determines the best move to play.
	 *
	 * @param {string[][]} grid
	 *     This is a multidimensional array 3x3 that represents
	 *     the game board.
	 *
	 * @param {'X'|'O'} symbol
	 *     This is the symbol that indicates the player turn either
	 *     "X" or "O".
	 *
	 * @returns
	 *     The best move after calculating the best score using
	 *     minimax algorithm.
	 */
	static getSmartMove(grid, symbol) {
		let bestScore = -Infinity;
		let bestMove = null;
		let winningMoveExist = ComputerPlayer.getWinningMoves(grid, symbol);
		if (winningMoveExist !== null) return winningMoveExist;

		for (let { row, col } of ComputerPlayer.getValidMoves(grid)) {
			grid[row][col] = symbol;
			const score = this.minimax(grid, symbol);
			grid[row][col] = " ";

			if (score > bestScore) {
				bestScore = score;
				bestMove = { row, col };
			}
		}

		return bestMove;
	}
}

module.exports = ComputerPlayer;

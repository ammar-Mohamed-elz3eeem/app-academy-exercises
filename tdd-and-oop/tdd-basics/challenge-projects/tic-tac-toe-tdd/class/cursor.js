const Screen = require("./screen");

class Cursor {
	/**
	 * This is the default constructor for the cursor class.
	 *
	 * @param numRows
	 *     This is the number of rows that the grid has.
	 *
	 * @param numCols
	 *     This is the number of columns that the grid has.
	 */
	constructor(numRows, numCols) {
		this.numRows = numRows;
		this.numCols = numCols;
		this.row = 0;
		this.col = 0;
		this.gridColor = "black";
		this.cursorColor = "yellow";
	}

	/**
	 * This function resets the background color of the grid cell
	 * to be the same color as grid color.
	 */
	resetBackgroundColor() {
		Screen.setBackgroundColor(this.row, this.col, this.gridColor);
	}

	/**
	 * This function sets the background color of the grid cell
	 * to be the same color as cursor color.
	 */
	setBackgroundColor() {
		Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
	}

	/**
	 * This method fires when the cursor trigger up move.
	 */
	up() {
		this.resetBackgroundColor();
		if (this.row > 0) {
			this.row--;
		}
		this.setBackgroundColor();
	}

	/**
	 * This method fires when the cursor trigger down move.
	 */
	down() {
		this.resetBackgroundColor();
		if (this.row < this.numRows - 1) {
			this.row++;
		}
		this.setBackgroundColor();
	}

	/**
	 * This method fires when the cursor trigger left move.
	 */
	left() {
		this.resetBackgroundColor();
		if (this.col > 0) {
			this.col--;
		}
		this.setBackgroundColor();
	}

	/**
	 * This method fires when the cursor trigger right move.
	 */
	right() {
		this.resetBackgroundColor();
		if (this.col < this.numCols - 1) {
			this.col++;
		}
		this.setBackgroundColor();
	}
}

module.exports = Cursor;

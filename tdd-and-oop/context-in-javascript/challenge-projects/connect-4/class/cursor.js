const Screen = require("./screen");

class Cursor {
	/**
	 * This is the default constructor for the cursor class.
	 *
	 * @param {number} numRows
	 *     This is the maximum number of rows that the grid has.
	 *
	 * @param {number} numCols
	 *     This is the maximum number of columns that the grid has.
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
	 * This method resets the background color of the current
	 * cell that the cursor stands on.
	 */
	resetBackgroundColor() {
		Screen.setBackgroundColor(this.row, this.col, this.gridColor);
	}

	/**
	 * This method sets the background color of the current cell
	 * that the cursor stands on.
	 */
	setBackgroundColor() {
		Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
	}

	/**
	 * This method moves the cursor pointer from the current point
	 * to the point on its left.
	 */
	left() {
		this.resetBackgroundColor();
		if (this.col > 0) {
			this.col--;
		}
		this.setBackgroundColor();
	}

	/**
	 * This method moves the cursor pointer from the current point
	 * to the point on its right.
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

const { expect } = require('chai');

const Cursor = require("../class/cursor.js");
const Screen = require("../class/screen.js");

describe ('Cursor', function () {

  /**
   * This is the cursor to move in the grid.
   *
   * @type {Cursor}
   */
  let cursor;

  beforeEach(function() {
    cursor = new Cursor(6, 7);
  });


  it('initializes for a 6x7 grid', function () {
    expect(cursor.row).to.equal(0);
    expect(cursor.col).to.equal(0);
    expect(cursor.numCols).to.eq(7);
    expect(cursor.numRows).to.eq(6);
  });

  it('processes right inputs', function () {
    cursor.right();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 1]);

    cursor.right();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 2]);

    cursor.right();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 3]);

    cursor.right();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 4]);

    cursor.right();
		expect([cursor.row, cursor.col]).to.deep.equal([0, 5]);

		cursor.right();
		expect([cursor.row, cursor.col]).to.deep.equal([0, 6]);

		cursor.right();
		expect([cursor.row, cursor.col]).to.deep.equal([0, 6]);
  });

  it('processes left inputs', function () {
    cursor.left();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 0]);

    cursor.right();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 1]);

    cursor.right();
		expect([cursor.row, cursor.col]).to.deep.equal([0, 2]);

    cursor.right();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 3]);

    cursor.right();
		expect([cursor.row, cursor.col]).to.deep.equal([0, 4]);

    cursor.left();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 3]);

    cursor.left();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 2]);

    cursor.left();
		expect([cursor.row, cursor.col]).to.deep.equal([0, 1]);

		cursor.left();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 0]);

		cursor.left();
		expect([cursor.row, cursor.col]).to.deep.equal([0, 0]);
  });
});


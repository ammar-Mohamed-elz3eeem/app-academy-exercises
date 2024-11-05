// Your code here
const { expect } = require('chai');
const { reciprocal, returnsThree } = require('../problems/number-fun');

describe("returnsThree function", () => {
  it("should returns 3", () => {
    expect(returnsThree()).to.eq(3);
  })
});

describe("reciprocal function", () => {
  context("valid arguments", () => {
    it("should return the result correctly", () => {
      expect(reciprocal(8 / 5)).to.eq(5 / 8);
			expect(reciprocal(10)).to.eq(1 / 10);
			expect(reciprocal(100)).to.eq(1 / 100);
    });
  });

  context("invalid arguments", () => {
    it("should throw range error when number is less than 1", () => {
      expect(() => reciprocal(0)).to.throw(
        RangeError,
        "number must be in range 1 to 1000000 inclusive"
      );
      expect(() => reciprocal(-1)).to.throw(
				RangeError,
				"number must be in range 1 to 1000000 inclusive"
			);
    });

    it("should throw range error when number is greater than 1000000", () => {
      expect(() => reciprocal(1000000.1)).to.throw(
				RangeError,
				"number must be in range 1 to 1000000 inclusive"
			);
			expect(() => reciprocal(1000001)).to.throw(
				RangeError,
				"number must be in range 1 to 1000000 inclusive"
			);
    });
  });
});


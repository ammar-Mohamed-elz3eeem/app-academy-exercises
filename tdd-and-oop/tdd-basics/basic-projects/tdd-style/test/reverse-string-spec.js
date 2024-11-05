// Your code here
const { expect } = require("chai");
const reverseString = require('../problems/reverse-string');

describe('reverseString function', () => {
  it("should return the reversed word of the given word", () => {
    expect(reverseString("fun")).to.equal("nuf");
    expect(reverseString("f")).to.equal("f");
		expect(reverseString("")).to.equal("");
  });

  it("should throw error when the input is not string", () => {
    expect(() => reverseString([])).to.throw(
      TypeError,
      "input must be of type string"
    );
    expect(() => reverseString({})).to.throw(
      TypeError,
      "input must be of type string"
    );
    expect(() => reverseString(55)).to.throw(
      TypeError,
      "input must be of type string"
    );
    expect(() => reverseString(true)).to.throw(
      TypeError,
      "input must be of type string"
    );
    expect(() => reverseString(null)).to.throw(
      TypeError,
      "input must be of type string"
    );
  });
});

// Your code here
const { expect } = require('chai');
const myMap = require('../problems/my-map');
const spies = require("chai-spies");
const chai = require("chai").use(spies);

/**
 * This is the array that the tests will use.
 *
 * @type {Array}
 */
let array;

/**
 * This is the spy that spies on doubler function
 *
 * @type {ChaiSpies.Spy}
 */
let doublerSpy;

/**
 * This is the spy that spies on tripler function
 *
 * @type {ChaiSpies.Spy}
 */
let triplerSpy;

/**
 * This is the spy that spies on map array method
 *
 * @type {ChaiSpies.Spy}
 */
let mapSpy;

/**
 * This function doubles the number by multiplying it by 2.
 *
 * @param {number} element
 *     This is the element to double.
 *
 * @returns
 *     the number after being multiplied by 2.
 */
function doubler (element) {
  return element * 2;
}

/**
 * This function triples the number by multiplying it by 3.
 *
 * @param {number} element
 *     This is the element to triple.
 *
 * @returns
 *     the number after being multiplied by 3.
 */
function tripler(element) {
	return element * 3;
}

describe("myMap() function", () => {
  beforeEach(() => {
    array = [2, 7, 3, 10];
    doublerSpy = chai.spy(doubler);
    triplerSpy = chai.spy(tripler);
    mapSpy = chai.spy.on(Array.prototype, "map");
  });

  it("should return new array with all elements being doubled", () => {
    const newArray = myMap(array, doublerSpy);
    expect(newArray).to.deep.equal([4, 14, 6, 20]);
    expect(array).to.deep.equal([2, 7, 3, 10]);
  });

  it("should call the callback number of times exactly equal the array length", () => {
    expect(doublerSpy).to.have.been.called.exactly(0);
    const newArrayDoubled = myMap(array, doublerSpy);
    expect(doublerSpy).to.have.been.called.exactly(array.length);
    expect(newArrayDoubled).to.deep.equal([4, 14, 6, 20]);

    expect(triplerSpy).to.have.been.called.exactly(0);
    const newArrayTripled = myMap(array, triplerSpy);
    expect(triplerSpy).to.have.been.called.exactly(array.length);
    expect(newArrayTripled).to.deep.equal([6, 21, 9, 30]);
  });

  it("should not call the map method of Array object", () => {
    const newArrayDoubled = myMap(array, doublerSpy);
    expect(array.map).to.have.been.called.exactly(0);
    array.map((el) => el * 5);
		expect(array.map).to.have.been.called.exactly(1);
	});

  afterEach(() => {
    chai.spy.restore(doubler);
    chai.spy.restore(tripler);
  });
});

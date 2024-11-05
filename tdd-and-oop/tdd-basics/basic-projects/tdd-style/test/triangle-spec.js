// Your code here
const { expect } = require('chai');
const { Triangle, Scalene, Isosceles, Right, Equilateral } = require('../problems/triangle');

/**
 * This is the instance of the triangle object.
 *
 * @type {Triangle}
 */
let triangle1;

/**
 * This is the instance of the triangle object.
 *
 * @type {Triangle}
 */
let triangle2;

/**
 * This is the instance of the triangle object.
 *
 * @type {Triangle}
 */
let triangle3;

/**
 * This is the instance of the triangle object.
 *
 * @type {Triangle}
 */
let invalidTriangle;

describe('class Triangle()', () => {
  beforeEach(() => {
    triangle1 = new Triangle(3, 4, 5);
    triangle2 = new Triangle(3, 3, 3);
    triangle3 = new Triangle(2, 2, 5);
  });
  
  describe("constructor() method", () => {
    it("should instantiate the object with three properties: (side1, side2, side3)", () => {
      expect(triangle1).to.have.property("side1");
      expect(triangle1).to.have.property("side2");
      expect(triangle1).to.have.property("side3");
    });

    it("should assign the values given to the constructor to the properties", () => {
      expect(triangle1.side1).to.eq(3);
      expect(triangle1.side2).to.eq(4);
      expect(triangle1.side3).to.eq(5);
		});
  });

  describe("getPerimeter() method", () => {
		it("should return the perimeter of the triangle", () => {
			expect(triangle1.getPerimeter()).to.eq(12);
			expect(triangle2.getPerimeter()).to.eq(9);
			expect(triangle3.getPerimeter()).to.eq(9);
		});
	});

  describe("hasValidSideLengths() method", () => {
		it("should return true if sum of any two sides is bigger than the other", () => {
			expect(triangle1.hasValidSideLengths()).to.be.true;
			expect(triangle2.hasValidSideLengths()).to.be.true;
    });

    it("should return false if sum of any two sides is less than the other", () => {
			expect(triangle3.hasValidSideLengths()).to.be.false;
		});
	});

  describe("validate() method", () => {
		it("should set new property isValid to true if triangle has valid side lengths", () => {
      expect(triangle1).to.not.have.property("isValid");
      expect(triangle2).to.not.have.property("isValid");
      triangle1.validate();
      triangle2.validate();
      expect(triangle1).to.have.property("isValid");
			expect(triangle2).to.have.property("isValid");
      expect(triangle1.isValid).to.be.true;
			expect(triangle2.isValid).to.be.true;
    });

    it("should set new property isValid to false if triangle has valid side lengths", () => {
      expect(triangle3).to.not.have.property("isValid");
      triangle3.validate();
			expect(triangle3).to.have.property("isValid");
			expect(triangle3.isValid).to.be.false;
		});
  });

  describe("getValidTriangles() method", () => {
    it("should return an array containing only valid triangles", () => {
      const validTriangles = Triangle.getValidTriangles([triangle1, triangle2, triangle3]);
      expect(validTriangles).to.deep.equal([triangle1, triangle2]);
    });
  });
});

describe("class Scalene()", () => {
	beforeEach(() => {
		triangle1 = new Scalene(3, 4, 5);
		triangle2 = new Scalene(3, 3, 3);
    triangle3 = new Scalene(2, 4, 5);
    invalidTriangle = new Scalene(1, 2, 5);
	});

	describe("constructor() method", () => {
		it("should instantiate the object with three properties: (side1, side2, side3)", () => {
			expect(triangle1).to.have.property("side1");
			expect(triangle1).to.have.property("side2");
			expect(triangle1).to.have.property("side3");
			expect(triangle1).to.have.property("isValidTriangle");
		});

		it("should assign the values given to the constructor to the properties", () => {
			expect(triangle1.side1).to.eq(3);
			expect(triangle1.side2).to.eq(4);
			expect(triangle1.side3).to.eq(5);
      expect(triangle1.isValidTriangle).to.eq(true);

      expect(invalidTriangle.side1).to.eq(1);
			expect(invalidTriangle.side2).to.eq(2);
			expect(invalidTriangle.side3).to.eq(5);
			expect(invalidTriangle.isValidTriangle).to.eq(false);
		});
	});

	describe("getPerimeter() method", () => {
		it("should return the perimeter of the triangle", () => {
			expect(triangle1.getPerimeter()).to.eq(12);
			expect(triangle2.getPerimeter()).to.eq(9);
			expect(triangle3.getPerimeter()).to.eq(11);
		});
	});

	describe("validate() method", () => {
		it("should set new property isValidScalene to true if triangle is valid scalene", () => {
			expect(triangle1).to.not.have.property("isValidScalene");
			expect(triangle3).to.not.have.property("isValidScalene");
			triangle1.validate();
			triangle3.validate();
			expect(triangle1).to.have.property("isValidScalene");
			expect(triangle3).to.have.property("isValidScalene");
			expect(triangle1.isValidScalene).to.be.true;
			expect(triangle3.isValidScalene).to.be.true;
		});

		it("should set new property isValidScalene to false if triangle is not scalene", () => {
			expect(triangle2).to.not.have.property("isValidScalene");
			triangle2.validate();
			expect(triangle2).to.have.property("isValidScalene");
			expect(triangle2.isValidScalene).to.be.false;
		});
	});
});

describe("class Isosceles()", () => {
	beforeEach(() => {
		triangle1 = new Isosceles(4, 4, 5);
		triangle2 = new Isosceles(3, 3, 5);
		triangle3 = new Isosceles(5, 5, 5);
		invalidTriangle = new Isosceles(1, 2, 5);
	});

	describe("constructor() method", () => {
		it("should instantiate the object with three properties: (side1, side2, side3)", () => {
			expect(triangle1).to.have.property("side1");
			expect(triangle1).to.have.property("side2");
			expect(triangle1).to.have.property("side3");
			expect(triangle1).to.have.property("isValidTriangle");
		});

		it("should assign the values given to the constructor to the properties", () => {
			expect(triangle1.side1).to.eq(4);
			expect(triangle1.side2).to.eq(4);
			expect(triangle1.side3).to.eq(5);
			expect(triangle1.isValidTriangle).to.eq(true);

			expect(invalidTriangle.side1).to.eq(1);
			expect(invalidTriangle.side2).to.eq(2);
			expect(invalidTriangle.side3).to.eq(5);
			expect(invalidTriangle.isValidTriangle).to.eq(false);
		});
	});

	describe("getPerimeter() method", () => {
		it("should return the perimeter of the triangle", () => {
			expect(triangle1.getPerimeter()).to.eq(13);
			expect(triangle2.getPerimeter()).to.eq(11);
		});
	});

	describe("validate() method", () => {
		it("should set new property isValidIsosceles to true if triangle is valid isosceles", () => {
			expect(triangle1).to.not.have.property("isValidIsosceles");
			expect(triangle2).to.not.have.property("isValidIsosceles");
			triangle1.validate();
			triangle2.validate();
			expect(triangle1).to.have.property("isValidIsosceles");
			expect(triangle2).to.have.property("isValidIsosceles");
			expect(triangle1.isValidIsosceles).to.be.true;
			expect(triangle2.isValidIsosceles).to.be.true;
		});

		it("should set new property isValidIsosceles to false if triangle is not Isosceles", () => {
			expect(triangle3).to.not.have.property("isValidIsosceles");
			triangle3.validate();
			expect(triangle3).to.have.property("isValidIsosceles");
			expect(triangle3.isValidIsosceles).to.be.false;
		});
	});
});

describe("class Right()", () => {
	beforeEach(() => {
		triangle1 = new Right(4, 4, 5);
		triangle2 = new Right(3, 4, 5);
		triangle3 = new Right(5, 5, 5);
		invalidTriangle = new Right(1, 2, 5);
	});

	describe("constructor() method", () => {
		it("should instantiate the object with three properties: (side1, side2, side3)", () => {
			expect(triangle1).to.have.property("side1");
			expect(triangle1).to.have.property("side2");
			expect(triangle1).to.have.property("side3");
			expect(triangle1).to.have.property("isValidTriangle");
		});

		it("should assign the values given to the constructor to the properties", () => {
			expect(triangle1.side1).to.eq(4);
			expect(triangle1.side2).to.eq(4);
			expect(triangle1.side3).to.eq(5);
			expect(triangle1.isValidTriangle).to.eq(true);

			expect(invalidTriangle.side1).to.eq(1);
			expect(invalidTriangle.side2).to.eq(2);
			expect(invalidTriangle.side3).to.eq(5);
			expect(invalidTriangle.isValidTriangle).to.eq(false);
		});
	});

	describe("getPerimeter() method", () => {
		it("should return the perimeter of the triangle", () => {
			expect(triangle1.getPerimeter()).to.eq(13);
			expect(triangle2.getPerimeter()).to.eq(12);
			expect(triangle3.getPerimeter()).to.eq(15);
		});
	});

	describe("validate() method", () => {
		it("should set new property isValidRight to true if triangle is valid Right", () => {
			expect(triangle2).to.not.have.property("isValidRight");
			triangle2.validate();
			expect(triangle2).to.have.property("isValidRight");
			expect(triangle2.isValidRight).to.be.true;
		});

		it("should set new property isValidRight to false if triangle is not Right", () => {
			expect(triangle1).to.not.have.property("isValidRight");
			expect(triangle3).to.not.have.property("isValidRight");
			triangle1.validate();
			triangle3.validate();
			expect(triangle1).to.have.property("isValidRight");
			expect(triangle3).to.have.property("isValidRight");
			expect(triangle1.isValidRight).to.be.false;
			expect(triangle3.isValidRight).to.be.false;
		});
	});
});

describe("class Equilateral()", () => {
	beforeEach(() => {
		triangle1 = new Equilateral(4, 4, 5);
		triangle2 = new Equilateral(3, 3, 5);
		triangle3 = new Equilateral(5, 5, 5);
		invalidTriangle = new Equilateral(1, 2, 5);
	});

	describe("constructor() method", () => {
		it("should instantiate the object with three properties: (side1, side2, side3)", () => {
			expect(triangle1).to.have.property("side1");
			expect(triangle1).to.have.property("side2");
			expect(triangle1).to.have.property("side3");
			expect(triangle1).to.have.property("isValidTriangle");
		});

		it("should assign the values given to the constructor to the properties", () => {
			expect(triangle1.side1).to.eq(4);
			expect(triangle1.side2).to.eq(4);
			expect(triangle1.side3).to.eq(5);
			expect(triangle1.isValidTriangle).to.eq(true);

			expect(invalidTriangle.side1).to.eq(1);
			expect(invalidTriangle.side2).to.eq(2);
			expect(invalidTriangle.side3).to.eq(5);
			expect(invalidTriangle.isValidTriangle).to.eq(false);
		});
	});

	describe("getPerimeter() method", () => {
		it("should return the perimeter of the triangle", () => {
			expect(triangle1.getPerimeter()).to.eq(13);
			expect(triangle2.getPerimeter()).to.eq(11);
			expect(triangle3.getPerimeter()).to.eq(15);
		});
	});

	describe("validate() method", () => {
		it("should set new property isValidEquilateral to true if triangle is valid Equilateral", () => {
			expect(triangle3).to.not.have.property("isValidEquilateral");
			triangle3.validate();
			expect(triangle3).to.have.property("isValidEquilateral");
			expect(triangle3.isValidEquilateral).to.be.true;
		});

		it("should set new property isValidEquilateral to false if triangle is not Equilateral", () => {
			expect(triangle1).to.not.have.property("isValidEquilateral");
			expect(triangle2).to.not.have.property("isValidEquilateral");
			triangle1.validate();
			triangle2.validate();
			expect(triangle1).to.have.property("isValidEquilateral");
			expect(triangle2).to.have.property("isValidEquilateral");
			expect(triangle1.isValidEquilateral).to.be.false;
			expect(triangle2.isValidEquilateral).to.be.false;
		});
	});
});

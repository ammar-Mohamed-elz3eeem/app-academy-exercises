// Your code here

class Triangle {
	/**
	 * takes in an arbitrary number of triangle instances, and returns
	 * all of the instances that are valid triangles.
	 *
	 * @param {Triangle[]} triangles
	 *     This is the list of triangles to extract valid triangles
	 *     from it.
	 *
	 * @returns
	 *     returns all of the instances that are valid triangles.
	 */
	static getValidTriangles(triangles) {
		return triangles.filter((triangle) => triangle.hasValidSideLengths());
	}

	/**
	 * This is the default constructor for the Triangle class.
	 *
	 * @param {number} side1
	 *     This is the first triangle side length.
	 *
	 * @param {number} side2
	 *     This is the second triangle side length.
	 *
	 * @param {number} side3
	 *     This is the third triangle side length.
	 */
	constructor(side1, side2, side3) {
		this.side1 = side1;
		this.side2 = side2;
		this.side3 = side3;
	}

	/**
	 * This method returns a number that represents the perimeter
	 * of the triangle.
	 *
	 * @returns
	 *     a number that represents the perimeter of the triangle.
	 */
	getPerimeter() {
		return this.side1 + this.side2 + this.side3;
	}

	/**
	 * This method returns true if it is a valid triangle, and false
	 * if it is invalid. In a valid triangle, the sum of any two sides
	 * must be greater than the remaining side.
	 *
	 * @returns
	 *     true if it is a valid triangle, and false if it is invalid.
	 */
	hasValidSideLengths() {
		return (
			this.side1 + this.side2 >= this.side3 &&
			this.side1 + this.side3 >= this.side2 &&
			this.side2 + this.side3 >= this.side1
		);
	}

	/**
	 * This method adds an isValid property to the triangle instance, with
	 * a value of true if it is a valid triangle and false if the side
	 * lengths are invalid.
	 */
	validate() {
		this.isValid = this.hasValidSideLengths();
	}
}

class Scalene extends Triangle {
	/**
	 * This is the default constructor for the Scalene class.
	 *
	 * @param {number} side1
	 *     This is the first scalene triangle side length.
	 *
	 * @param {number} side2
	 *     This is the second scalene triangle side length.
	 *
	 * @param {number} side3
	 *     This is the third scalene triangle side length.
	 */
	constructor(side1, side2, side3) {
		super(side1, side2, side3);
		this.isValidTriangle = this.hasValidSideLengths();
	}

	/**
	 * This method returns true if it is a valid scalene triangle,
	 * and false if it is invalid. In a valid scalene triangle,
	 * all sides must be different lengths.
	 *
	 * @returns
	 *     true if it is a valid scalene triangle, false otherwise.
	 */
	isScalene() {
		return (
			this.side1 !== this.side2 &&
			this.side2 !== this.side3 &&
			this.side1 !== this.side3
		);
	}

	/**
	 * This method sets an isValidScalene property to the scalene
	 * triangle instance, with a value of true if it is a valid
	 * scalene triangle and false if the side lengths are invalid
	 * for a scalene triangle.
	 */
	validate() {
		this.isValidScalene = this.isScalene();
	}
}

class Isosceles extends Triangle {
	/**
	 * This is the default constructor for the Isosceles class.
	 *
	 * @param {number} side1
	 *     This is the first isosceles triangle side length.
	 *
	 * @param {number} side2
	 *     This is the second isosceles triangle side length.
	 *
	 * @param {number} side3
	 *     This is the third isosceles triangle side length.
	 */
	constructor(side1, side2, side3) {
		super(side1, side2, side3);
		this.isValidTriangle = this.hasValidSideLengths();
	}

	/**
	 * This method returns true if it is a valid isosceles triangle,
	 * and false if it is invalid. In a valid isosceles triangle,
	 * two sides must be equal lengths.
	 *
	 * @returns
	 *     true if it is a valid isosceles triangle, false otherwise.
	 */
	isIsosceles() {
    return (
      (this.side1 === this.side2 ||
        this.side2 === this.side3 ||
        this.side1 === this.side3) &&
      this.side1 + this.side2 + this.side3 !== this.side1 * 3
    )
	}

	/**
	 * This method sets an isValidScalene property to the scalene
	 * triangle instance, with a value of true if it is a valid
	 * scalene triangle and false if the side lengths are invalid
	 * for a scalene triangle.
	 */
	validate() {
		this.isValidIsosceles = this.isIsosceles();
	}
}

class Right extends Triangle {
	/**
	 * This is the default constructor for the Right class.
	 *
	 * @param {number} side1
	 *     This is the first right triangle side length.
	 *
	 * @param {number} side2
	 *     This is the second right triangle side length.
	 *
	 * @param {number} side3
	 *     This is the third right triangle side length.
	 */
	constructor(side1, side2, side3) {
		super(side1, side2, side3);
		this.isValidTriangle = this.hasValidSideLengths();
	}

	/**
	 * This method returns true if it is a valid Right triangle,
	 * and false if it is invalid. In a valid Right triangle,
	 * the square root of the summation of the two sides of the
	 * triangle squared must equal the other side.
	 *
	 * @returns
	 *     true if it is a valid right triangle, false otherwise.
	 */
	isRight() {
		const side1Sq = Math.pow(this.side1, 2);
		const side2Sq = Math.pow(this.side2, 2);
		const side3Sq = Math.pow(this.side3, 2);

		return (
			side1Sq === side2Sq + side3Sq ||
			side2Sq === side1Sq + side3Sq ||
			side3Sq === side1Sq + side2Sq
		);
	}

	/**
	 * This method sets an isValidRight property to the Right
	 * triangle instance, with a value of true if it is a valid
	 * right triangle and false if the side lengths are invalid
	 * for a right triangle.
	 */
	validate() {
		this.isValidRight = this.isRight();
	}
}

class Equilateral extends Triangle {
	/**
	 * This is the default constructor for the Equilateral class.
	 *
	 * @param {number} side1
	 *     This is the first Equilateral triangle side length.
	 *
	 * @param {number} side2
	 *     This is the second Equilateral triangle side length.
	 *
	 * @param {number} side3
	 *     This is the third Equilateral triangle side length.
	 */
	constructor(side1, side2, side3) {
		super(side1, side2, side3);
		this.isValidTriangle = this.hasValidSideLengths();
	}

	/**
	 * This method returns true if it is a valid Equilateral triangle,
	 * and false if it is invalid. In a valid Equilateral triangle,
	 * all sides must be equal lengths.
	 *
	 * @returns
	 *     true if it is a valid Equilateral triangle, false otherwise.
	 */
	isEquilateral() {
		return this.side1 === this.side2 && this.side2 === this.side3;
	}

	/**
	 * This method sets an isValidEquilateral property to the
	 * Equilateral triangle instance, with a value of true if
	 * it is a valid Equilateral triangle and false if the
	 * side lengths are invalid for a Equilateral triangle.
	 */
	validate() {
		this.isValidEquilateral = this.isEquilateral();
	}
}

module.exports = {
	Triangle,
  Scalene,
	Isosceles,
	Right,
	Equilateral
};

// Your code here

class Car {
	/**
	 * This is the default constructor for car object.
	 */
	constructor() {
		this.speed = 0;
	}

	/**
	 * This method changes the speed of the car with the
	 * given newSpeed.
	 *
	 * @param {number} newSpeed
	 *     This is the newSpeed to assign to car.speed.
	 *
	 * @returns
	 *     The new speed of the car after changing it with
	 *     the value of the new speed.
	 */
	drive (newSpeed) {
		this.speed = newSpeed;
		return this.speed;
	}
}

// let car = new Car();
// car.drive(0);     // => returns 0
// console.log(car); // => { speed: 0 }

// car.drive(10);    // => returns 10
// console.log(car); // => { speed: 10, }

// car.drive(50);    // => returns 50
// console.log(car); // -> { speed: 50 }

// car.drive(100);   // => returns 100
// console.log(car); // -> { speed: 100 }


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Car;
} catch {
	module.exports = null;
}
// Your code here
class Dragon {
	/**
	 * This is the default constructor for the Dragon class.
	 *
	 * @param {string} name
	 *     This is the name of the Dragon instance.
	 *
	 * @param {string} color
	 *     This is the color of the Dragon instance.
	 */
	constructor(name, color) {
		this.name = name;
		this.color = color;
	}

	/**
	 * This method return a string that uses the name property value
	 * formatted as "${name} breathes fire everywhere! BURN!!!!".
	 *
	 * @returns
	 *     the formatted string "${name} breathes fire everywhere! BURN!!!!".
	 */
	breathesFire() {
		return `${this.name} breathes fire everywhere! BURN!!!!`;
	}

	/**
	 * This method return an array of all the dragon names from the
	 * instances that were passed into it as arguments.
	 *
	 * @param {...Dragon} dragons
	 *     This is the dragons instances to get their names.
	 *
	 * @returns
	 *     an array of all the dragon names from the instances that
	 *     were passed into it as arguments.
	 */
	static getDragons(...dragons) {
		return dragons.map((dragon) => dragon.name);
	}
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
const { Item } = require('./item');

class Food extends Item {
	/**
	 * This is the default constructor for Food class.
	 *
	 * @param {string} name
	 *     This is the name of the food.
	 *
	 * @param {string} description
	 *     This is the description of the food.
	 */
	constructor(name, description) {
		super(name, description);
	}
}

module.exports = {
  Food,
};

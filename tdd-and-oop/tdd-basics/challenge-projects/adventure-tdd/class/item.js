class Item {
	/**
	 * This is the default constructor for item class.
	 *
	 * @param {string} name
	 *     This is the name of the item.
	 *
	 * @param {string} description
	 *     This is the description of the item.
	 */
	constructor(name, description) {
		this.name = name;
		this.description = description;
	}
}

module.exports = {
  Item,
};

class Room {
	/**
	 * This is the default constructor of the room class.
	 *
	 * @param {string} name
	 *     This is the name of the room instance.
	 *
	 * @param {string} description
	 *     This is the description of the room instance.
	 */
	constructor(name, description) {
		this.name = name;
		this.description = description;
		this.exits = {};
		this.items = [];
	}

	/**
	 * This method prints to the console the room details.
	 */
	printRoom() {
		console.clear();
		console.log("");
		console.log(this.name);
		console.log("");
		console.log(this.description);
		console.log("");
		if (this.items.length > 0) {
			console.log(`Items: ${this.items.map((item) => item.name).join(", ")}`);
		}
		console.log(this.getExitsString());
		console.log("");
	}

	/**
	 * This method returns an array containing all
	 * the exits in the current room.
	 *
	 * @returns
	 *     an array containing all the exits in the
	 *     current room.
	 */
	getExits() {
		return Object.keys(this.exits);
	}

	/**
	 * This method returns all the exits in the current
	 * room as string.
	 *
	 * @returns
	 *     This method returns all the exits in the
	 *     current room as string.
	 */
	getExitsString() {
		return `Exits: ${this.getExits().join(", ")}`;
	}

	/**
	 * This method sets the exits of the current room.
	 *
	 * @param {'n'|'s'|'e'|'w'} direction
	 *     This is the direction of the room to connect
	 *     with this room.
	 *
	 * @param {Room} connectingRoom
	 *     This is the room to connect to this room.
	 */
	connectRooms(direction, connectingRoom) {
		// Check if the direction and connecting room are valid
		if (["n", "s", "e", "w"].indexOf(direction) < 0 || !connectingRoom) {
			throw new Error("Error: Invalid room connection");
		}

		this.exits[direction] = connectingRoom;
	}

	/**
	 * This method returns the room in the given direction.
	 *
	 * @param {'n'|'s'|'e'|'w'} direction
	 *     This is the direction of the room to get its
	 *     details.
	 *
	 * @returns
	 *     an object of type room.
	 */
	getRoomInDirection(direction) {
		return this.exits[direction];
	}

	/**
	 * This method returns an item from the room's inventory
	 * using item name.
	 *
	 * @param {string} name
	 *     This is the item to get from room's inventory.
	 *
	 * @returns
	 *     an item from the room's inventory.
	 */
	getItemByName(name) {
		// Fill this in
		let item = this.items.find((item) => item.name === name);
		if (item !== undefined) {
			return item;
		}
		return null;
	}
}

module.exports = {
  Room,
};

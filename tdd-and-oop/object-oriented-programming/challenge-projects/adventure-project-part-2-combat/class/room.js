const { Item } = require("./item");

class Room {
	/**
	 * This is the items that exists in the current room.
	 *
	 * @type {Array<Item>}
	 */
	items;

	/**
	 * This is the rooms connected to this room.
	 *
	 * @type {Array<Room>}
	 */
  exits;

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
	 * This method returns the list of enemies that exists in
	 * that room
	 *
	 * @returns {Array<Enemy>}
	 *     This is the list of enemies that exists in that room.
	 */
	getEnemies() {
		const { World } = require("./world");
		return World.getEnemiesInRoom(this);
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
		if (this.getEnemies().length > 0) {
			console.log(
				`Enemies: ${this.getEnemies()
					.map((enemy) => enemy.name)
					.join(", ")}`
			);
		}
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
	 * @returns {Array<string>}
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
	 * @returns {string}
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
	 * @returns {Room}
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
	 * @returns {Item}
	 *     an item from the room's inventory.
	 */
	getItemByName(name) {
		// Fill this in
		return this.items.find((item) => item.name === name);
	}

	/**
	 * This method returns an enemy from the room's enemies
	 * array which exists in the current room.
	 *
	 * @param {string} name
	 *     This is name of the enemy to get.
	 *
	 * @returns {Enemy}
	 *     an enemy from the room's enemies array which exists
	 *     in the current room.
	 */
	getEnemyByName(name) {
		// Fill this in
		const enemiesInRoom = this.getEnemies();
		return enemiesInRoom.find((enemy) => enemy.name === name);
	}
}

module.exports = {
  Room,
};

const Light = require("./light");
const { Room } = require("./room");

class DarkRoom extends Room {
  /**
   * This is the default constructor for the dark room object.
   *
   * @param {string} name
   *     This is the name for the dark room object.
   */
	constructor(name) {
		super(name, "You cannot see anything");
		this.playerHasLight = false;
	}

	/**
	 * This method return true if the room has light object in
   * its items or the player in the room has light object in
   * his items inventory.
   *
	 * @returns
	 *     true if the room has light object in its items or
	 *     the player in the room has light object in his items
	 *     inventory.
	 */
	hasLight() {
		return (
			this.items.find((item) => item instanceof Light) !== undefined || this.playerHasLight
		);
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
		if (this.hasLight()) {
			return Object.keys(this.exits);
		}
	}

	/**
	 * This method prints to the console the room details.
	 */
	printRoom () {
		// console.error("this.playerHasLight", this.playerHasLight);
		console.clear();
		console.log("");
		console.log(this.name);
		console.log("");
		console.log(this.description);
		console.log("");
		if (this.hasLight()) {
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
	}
};

module.exports = DarkRoom;

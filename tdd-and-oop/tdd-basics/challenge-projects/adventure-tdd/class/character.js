const { Item } = require("./item");
// const { Room } = require("./room");

class Character {
	/**
	 * This is the items that the character has in his inventory.
	 *
	 * @type {Array<Item>}
	 */
	items;

	/**
	 * This is the character health.
	 *
	 * @type {number}
	 */
	health;

	/**
	 * This is the character strength.
	 *
	 * @type {number}
	 */
  strength;

	/**
	 * This is the default constructor for Character class.
	 *
	 * @param {string} name
	 *     This is the name of the character instance.
	 *
	 * @param {string} description
	 *     This is the description of the character instance.
	 *
	 * @param {Room} currentRoom
	 *     This is the room instance that character exists in.
	 */
	constructor(name, description, currentRoom) {
		// Fill this in
		this.name = name;
		this.description = description;
		this.currentRoom = currentRoom;
		this.health = 100;
		this.strength = 10;
		this.items = [];
	}

  /**
   * This method applies amount of damage to the enemy.
   *
   * @param {number} amount
   *     This is the amount of damage to apply.
   */
	applyDamage(amount) {
    this.health -= amount;
    if (this.health <= 0) {
      this.die();
    }
	}

  /**
   * This method is fired when the enemy is dead.
   */
	die() {
		// Fill this in
    this.currentRoom.items.push(...this.items);
    this.items = [];
		this.currentRoom = null;
	}
}

module.exports = {
  Character,
};

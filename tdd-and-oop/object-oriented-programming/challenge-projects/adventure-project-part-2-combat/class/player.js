const { Character } = require('./character');
const { Food } = require('./food');
const { Item } = require('./item');

class Player extends Character {
	/**
	 * This is the default constructor for player class.
	 *
	 * @param {string} name
	 *     This is the name of the player.
	 *
	 * @param {Room} startingRoom
	 *     This is the room that player starts in.
	 */
	constructor(name, startingRoom) {
		super(name, "main character", startingRoom);
	}

	/**
	 * This method moves the player into the given direction.
	 *
	 * @param {string} direction
	 *     This is the direction to move in either 's', 'n', 'w' or 'e'.
	 */
	move(direction) {
		const nextRoom = this.currentRoom.getRoomInDirection(direction);

		// If the next room is valid, set the player to be in that room
		if (nextRoom) {
			this.currentRoom = nextRoom;

			nextRoom.printRoom(this);
		} else {
			console.log("You cannot move in that direction");
		}
	}

	/**
	 * This method console logs all items the player currently held
	 * if no items in player's hand it console logs "${name} is not
	 * carrying anything."
	 */
	printInventory() {
		if (this.items.length === 0) {
			console.log(`${this.name} is not carrying anything.`);
		} else {
			console.log(`${this.name} is carrying:`);
			for (let i = 0; i < this.items.length; i++) {
				console.log(`  ${this.items[i].name}`);
			}
		}
	}

	/**
	 * This method Picks up an item from a room into the
	 * player's inventory.
	 *
	 * @param {string} itemName
	 *     This is an item to pick and add to the player's
	 *     inventory.
	 */
	takeItem(itemName) {
		// Fill this in
		const currentItem = this.currentRoom.getItemByName(itemName);
		if (currentItem !== null) {
			this.currentRoom.items = this.currentRoom.items.filter(
				(item) => item.name !== itemName
			);
			this.items.push(currentItem);
		}
	}

	/**
	 * This method drops item from the player inventory to the
	 * room inventory.
	 *
	 * @param {string} itemName
	 *     This is the item to drop from the player inventory.
	 */
	dropItem(itemName) {
		// Fill this in
		const currentItem = this.getItemByName(itemName);
		if (currentItem !== null) {
			this.items = this.items.filter((item) => item.name !== itemName);
			this.currentRoom.items.push(currentItem);
		}
	}

	/**
	 * This method removes item from the player inventory by eating it
	 * if it is a food. If item is not food then nothing happens.
	 * @param {string} itemName
	 *     This is the item name to eat.
	 */
	eatItem(itemName) {
		// Fill this in
		const currentItem = this.getItemByName(itemName);
		if (currentItem !== null && currentItem instanceof Food) {
			this.items = this.items.filter((item) => item.name !== itemName);
		}
	}

	/**
	 * This method returns an item from the player's inventory
	 * using item name.
	 *
	 * @param {string} name
	 *     This is the item to get from player's inventory.
	 *
	 * @returns {Item}
	 *     an item from the player's inventory.
	 */
	getItemByName(name) {
		// Fill this in
		let item = this.items.find((item) => item.name === name);

		if (item !== undefined) {
			return item;
		}

		return null;
	}

  /**
   * This method subtract player.strength from enemy.health.
   *
   * @param {string} name
   *     This is the name of the enemy to hit.
   */
	hit(name) {
		// Fill this in
		const enemy = this.currentRoom.getEnemyByName(name);
		enemy.applyDamage(this.strength);
		enemy.attackTarget = this;
	}

  /**
   * This method is fired when enemy attacks the player
   * and the player health is zero.
   */
  die () {
		console.log("You are dead!");
		process.exit();
	}
}

module.exports = {
	Player,
};

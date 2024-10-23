const { Character } = require("./character");

class Enemy extends Character {
	/**
	 * This is the default constructor for Enemy class.
	 *
	 * @param {string} name
	 *     This is the name of the enemy to construct.
	 *
	 * @param {string} description
	 *     This is the description of the enemy to construct.
	 *
	 * @param {string} currentRoom
	 *     This is the room that the enemy exist in.
	 */
	constructor(name, description, currentRoom) {
		// Fill this in
		super(name, description, currentRoom);
		this.cooldown = 3000;
		this.attackTarget = null;
	}

	/**
	 * This method sets the player of the game.
	 *
	 * @param {Player} player
	 *     This is player to set.
	 */
	setPlayer(player) {
		this.player = player;
	}

	/**
	 * This method moves the enemy from the current room to
	 * a random room.
	 */
	randomMove() {
		// Fill this in
		const exits = this.currentRoom.getExits();
		const randomIndex = Math.floor((Math.random() + 0) * exits.length);
		this.currentRoom = this.currentRoom.exits[exits[randomIndex]];
		if (this.cooldown === 0) {
			this.act();
		}
	}

  /**
   * This method adds the ability for the enemy to
   * eat a sandwich.
   */
	takeSandwich() {
    // Fill this in
    const food = this.currentRoom.items.find(item => item.name === 'sandwich');
    if (food !== undefined) {
      this.items.push(food);
      this.currentRoom.items = this.currentRoom.items.filter(
				(item) => item.name !== "sandwich"
			);
    }
	}

	/**
	 * This method alerts the enemy that there is a player
	 * in the room you are currently in.
	 *
	 * @param {string} message
	 *     This is the message to alert the enemy with.
	 */
	alert(message) {
		if (this.player && this.player.currentRoom === this.currentRoom) {
			console.log(message);
		}
	}

	/**
	 * This method resets the enemy to the cool state.
	 */
	rest() {
		// Wait until cooldown expires, then act
		const resetCooldown = function () {
			this.cooldown = 0;
			this.act();
		};
		setTimeout(resetCooldown, this.cooldown);
	}

  /**
   * This method makes the enemy apply some damage to
   * the player who hits him.
   */
	attack() {
    // Fill this in
    this.attackTarget.applyDamage(this.strength);
    if (this.cooldown === 0) {
      this.act();
    }
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

	act() {
		if (this.health <= 0) {
			// Dead, do nothing;
		} else if (this.cooldown > 0) {
			this.rest();
		} else {
			this.scratchNose();
			this.rest();
		}

		// Fill this in
	}

	scratchNose() {
		this.cooldown += 1000;
		this.alert(`${this.name} scratches its nose`);
	}
}

module.exports = {
  Enemy,
};

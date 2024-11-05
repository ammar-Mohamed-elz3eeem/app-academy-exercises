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
		this.isAggressive = false;
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
		this.cooldown = 3000;
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

		if (this.cooldown === 0) {
			this.act();
		} else {
			setTimeout(resetCooldown.bind(this), this.cooldown);
		}
	}

  /**
   * This method makes the enemy apply some damage to
   * the player who hits him.
   */
	attack() {
    this.attackTarget.applyDamage(this.strength);
		this.cooldown = 3000;
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
	 * This is an action that the enemy should take on timely
	 * basis to determine if his cooldown is zero so he is allowed
	 * to attack or do anything or his cooldown is larger than zero
	 * then he should rest.
	 */
	act () {
		if (this.health <= 0) {
			// Dead, do nothing;
			return;
		} else if (this.cooldown > 0) {
			this.rest();
			return;
		} else {
			if (this.isAggressive && this.attackTarget) {
				this.attack();
			} else {
				this.scratchNose();
			}
			this.rest();
		}
	}

	/**
	 * This method is called when the enemy have no player to
	 * attack so he scratch his nose to increase his cooldown
	 * property.
	 */
	scratchNose() {
		this.cooldown += 1000;
		this.alert(`${this.name} scratches its nose`);
	}
}

module.exports = {
  Enemy,
};

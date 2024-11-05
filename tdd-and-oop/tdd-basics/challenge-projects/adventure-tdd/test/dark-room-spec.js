const { expect, use: chaiUse } = require('chai');
const spies = require("chai-spies");
const chai = chaiUse(spies);
const DarkRoom = require('../class/dark-room');
const Light = require('../class/light');
const { Player } = require('../class/player');
const { Item } = require('../class/item');
const { Food } = require('../class/food');
const { World } = require('../class/world');
const { Enemy } = require('../class/enemy');
const { Room } = require('../class/room');

/**
 * This is the dark room object
 * 
 * @type {DarkRoom}
 */
let darkRoom;

/**
 * This is the normal room object
 *
 * @type {Room}
 */
let normalRoom;

/**
 * This is a rock item object.
 * 
 * @type {Item}
 */
let item1;

/**
 * This is a sandwich food object.
 * 
 * @type {Food}
 */
let item2;

/**
 * This is a light item object
 * 
 * @type {Light}
 */
let light;

/**
 * This is the player object.
 *
 * @type {Player}
 */
let player;

/**
 * This is a key sandbox.
 *
 * @type {ChaiSpies.Sandbox}
 */
let consoleSpy = chai.spy.sandbox();

describe("class DarkRoom()", () => {
  beforeEach(() => {
    darkRoom = new DarkRoom("luggage");
    normalRoom = new Room("normal", "This is a normal room");
    normalRoom.connectRooms("s", darkRoom);
    darkRoom.connectRooms("n", normalRoom);
    item1 = new Item("rock", "This is simple rock");
    item2 = new Food("sandwich", "This is a simple sandwich");
    light = new Light("big-light", "This is a big light object");
    player = new Player("ali", normalRoom);
    normalRoom.items.push(light);
    consoleSpy.on(console, "log");
    darkRoom.items.push(item1, item2);
  });

  it("should not print enemies or exists if the room has no light object", () => {
    World.enemies.push(new Enemy("goblin", "terrified goblin", darkRoom));
    darkRoom.printRoom();
    expect(console.log).to.have.been.called.exactly(5);
    expect(darkRoom.hasLight()).to.equal(false);
  });

  it("should print exists if the room has light object with no enemies", () => {
    darkRoom.items.push(light);
    darkRoom.printRoom();
    expect(console.log).to.have.been.called.exactly(8);
		expect(darkRoom.hasLight()).to.equal(true);
  });

  it("should print exists & enemies if the room has light object", () => {
    World.enemies.push(new Enemy("goblin", "terrified goblin", darkRoom));
    darkRoom.items.push(light);
		darkRoom.printRoom();
		expect(console.log).to.have.been.called.exactly(9);
		expect(darkRoom.hasLight()).to.equal(true);
	});

  it("should print exists if the room does not have light object but has a player who has light", () => {
    player.takeItem("big-light");
    player.move("s");
    expect(console.log).to.have.been.called.exactly(8);
    expect(darkRoom.hasLight()).to.equal(true);
  });

  it("should print exists & enemies if the room does not have light object but has a player who has light", () => {
		World.enemies.push(new Enemy("goblin", "terrified goblin", darkRoom));
    player.takeItem("big-light");
    player.move("s");
		expect(console.log).to.have.been.called.exactly(9);
		expect(darkRoom.hasLight()).to.equal(true);
	});

  afterEach(() => {
    consoleSpy.restore();
    World.enemies = [];
  })
});

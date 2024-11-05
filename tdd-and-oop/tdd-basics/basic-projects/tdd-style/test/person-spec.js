// Your code here
const { expect } = require('chai');
const Person = require('../problems/person');

describe("class Person()", () => {
  /**
   * This is an instance of the person class.
   *
   * @type {Person}
   */
  let person1;

  /**
   * This is an instance of the person class.
   *
   * @type {Person}
   */
  let person2;

  /**
   * This is an instance of the person class.
   *
   * @type {Person}
   */
  let person3;

  beforeEach(() => {
    person1 = new Person("Ammar", 27);
    person2 = new Person("Abd-allah", 25);
    person3 = new Person("Shafiq", 26);
  });

  describe("constructor method", () => {
    it("should have name and age properties", () => {
      expect(person1).to.have.property("name");
      expect(person1).to.have.property("age");
    });

    it("should assign name and age when constructor is called", () => {
      expect(person1.name).to.eq("Ammar");
      expect(person1.age).to.eq(27);
      expect(person2.name).to.eq("Abd-allah");
      expect(person2.age).to.eq(25);
      expect(person3.name).to.eq("Shafiq");
      expect(person3.age).to.eq(26);
    });
  });

  describe("sayHello() function", () => {
    it("should return a greeting message that contain person name", () => {
      expect(person1.sayHello()).to.eq("Hi, Ammar!");
      expect(person2.sayHello()).to.eq("Hi, Abd-allah!");
      expect(person3.sayHello()).to.eq("Hi, Shafiq!");
    })
  });

  describe("visit() function", () => {
    it("should return a string indicating that person visits another person", () => {
      expect(person1.visit(person2)).to.eq("Ammar visited Abd-allah");
      expect(person1.visit(person3)).to.eq("Ammar visited Shafiq");
      expect(person2.visit(person3)).to.eq("Abd-allah visited Shafiq");
    });

    it("should throw error if the input object is not instance of Person class", () => {
      expect(() => person1.visit({})).to.throw(
        TypeError,
        "otherPerson must be instance of person class"
      );
      expect(() => person1.visit(new Array())).to.throw(
        TypeError,
        "otherPerson must be instance of person class"
      );
      expect(() => person1.visit(new Map())).to.throw(
        TypeError,
        "otherPerson must be instance of person class"
      );
    });
  });

  describe("switchVisit() function", () => {
    it("should return a string indicating that person visits another person", () => {
      expect(person1.switchVisit(person2)).to.eq("Abd-allah visited Ammar");
      expect(person1.switchVisit(person3)).to.eq("Shafiq visited Ammar");
      expect(person2.switchVisit(person3)).to.eq("Shafiq visited Abd-allah");
    });

    it("should throw error if the input object is not instance of Person class", () => {
      expect(() => person1.switchVisit({})).to.throw(
        TypeError,
        "otherPerson must be instance of person class"
      );
      expect(() => person1.switchVisit(new Array())).to.throw(
        TypeError,
        "otherPerson must be instance of person class"
      );
      expect(() => person1.switchVisit(new Map())).to.throw(
        TypeError,
        "otherPerson must be instance of person class"
      );
    });
  });

  describe('update() function', () => {
    it("should throw TypeError with message input must be of type object", () => {
      expect(() => person1.update("ahmed")).to.throw(
        TypeError,
        "input must be of type object"
      );
      expect(() => person1.update(5)).to.throw(
        TypeError,
        "input must be of type object"
      );
      expect(() => person1.update(["ammar", "21"])).to.throw(
        TypeError,
        "input must be of type object"
      );
    });

    it("should throw TypeError with object must have name and age as keys with its values", () => {
      expect(() => person1.update({})).to.throw(
        TypeError,
        "object must have name and age as keys with its values"
      );
      expect(() => person1.update({ name: "ali" })).to.throw(
        TypeError,
        "object must have name and age as keys with its values"
      );
      expect(() => person1.update({ age: 24 })).to.throw(
        TypeError,
        "object must have name and age as keys with its values"
      );
    });

    it("should update the person info with the given data", () => {
      person1.update({ name: "Ali", age: 50 });
      expect(person1.name).to.eq("Ali");
      expect(person1.age).to.eq(50);
    });
  });

  describe('tryUpdate() function', () => {
    it("should return true if the update method was called successfully", () => {
      expect(person1.name).to.eq("Ammar");
      expect(person1.age).to.eq(27);
      expect(person2.name).to.eq("Abd-allah");
      expect(person2.age).to.eq(25);
      expect(person3.name).to.eq("Shafiq");
      expect(person3.age).to.eq(26);
      expect(person1.tryUpdate({ name: 'Khadija', age: 20 })).to.be.true;
      expect(person2.tryUpdate({ name: "Naema", age: 14 })).to.be.true;
      expect(person3.tryUpdate({ name: "Badria", age: 15 })).to.be.true;
      expect(person1.name).to.eq("Khadija");
      expect(person1.age).to.eq(20);
      expect(person2.name).to.eq("Naema");
      expect(person2.age).to.eq(14);
      expect(person3.name).to.eq("Badria");
      expect(person3.age).to.eq(15);
    });

    it("should return false if the update method throws error", () => {
      expect(person1.name).to.eq("Ammar");
      expect(person1.age).to.eq(27);
      expect(person2.name).to.eq("Abd-allah");
      expect(person2.age).to.eq(25);
      expect(person3.name).to.eq("Shafiq");
      expect(person3.age).to.eq(26);
      expect(person1.tryUpdate(["amna", 22])).to.be.false;
      expect(person2.tryUpdate(new Map([["name", "ahmed"], ["age", 22]]))).to.be.false;
      expect(person3.tryUpdate("khadija")).to.be.false;
      expect(person1.name).to.eq("Ammar");
      expect(person1.age).to.eq(27);
      expect(person2.name).to.eq("Abd-allah");
      expect(person2.age).to.eq(25);
      expect(person3.name).to.eq("Shafiq");
      expect(person3.age).to.eq(26);
    });
  });

  describe('greetAll() function', () => {
    it("should return an array containing the result of sayHello() for every object", () => {
      expect(Person.greetAll([person1, person2, person3])).to.deep.equal([
        person1.sayHello(),
        person2.sayHello(),
        person3.sayHello(),
      ]);
    });
  });

  afterEach(() => {
    person1 = null;
    person2 = null;
    person3 = null;
  });
});

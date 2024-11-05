const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  /**
   * This is an instance of the word class.
   *
   * @type {Word}
   */
  let word;

  describe("Word constructor function", function () {
    beforeEach(() => {
      word = new Word("");
    });

    it('should have a "word" property', function () {
      expect(word).to.have.property('word');
    });

    it('should set the "word" property when a new word is created', function () {
      expect(word.word).to.eq("");
    });
  });

  describe("removeVowels function", function () {
    beforeEach(() => {
			word = new Word("instance");
    });

    it("should return a the word with all vowels removed", function () {
      expect(word.removeVowels()).to.equal("nstnc");
    });
  });

  describe("removeConsonants function", function () {
    beforeEach(() => {
			word = new Word("instance");
		});

    it("should return the word with the consonants removed", function () {
      expect(word.removeConsonants()).to.equal("iae");
    });
  });

  describe("pigLatin function", function () {
    beforeEach(() => {
			word = new Word("instance");
    });

    it("should return the word converted to pig latin", function () {
      expect(word.pigLatin()).to.equal("instanceyay");
    });
  });
});

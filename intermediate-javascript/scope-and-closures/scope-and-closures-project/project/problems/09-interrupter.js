/***********************************************************************
Write a function named interrupter that accepts a single parameter `interruptingWord`: 
  `interrupter(interruptingWord)`
The interrupter function should return a function. 
When the function returned by interrupter is called with a sentence,
the sentence will be returned with the original interruptingWord inserted
between each word in the sentence.

Look below to see how this function is invoked:
let rudePerson = interrupter("what"); // => returns a function
console.log(rudePerson("how are you")); // prints "how what are what you"
console.log(rudePerson("I like pie")); // prints "I what like what pie"


Invoking the interrupter function again: 
let rudePerson2 = interrupter("yo"); // => returns a function
console.log(rudePerson2("I love dogs")); // prints "I yo love yo dogs"


***********************************************************************/

/**
 * This function accepts a single parameter interruptingWord
 * The function should return a function. When the function
 * returned by interrupter is called with a sentence, the
 * sentence will be returned with the original interruptingWord
 * inserted between each word in the sentence.
 *
 * @param {string} interruptingWord
 *     This is the word to insert between every word
 *     of the sentence given to the function returned
 *     from this function.
 *
 * @returns
 *     a function that acceipts a sentence as input
 *     and every time this function is called with
 *     a sentence, every word on that setence will be
 *     separated with the interruptingWord.
 */
function interrupter(interruptingWord) {
  // Your code here
  return (sentence) => {
    const sentenceAsArray = sentence.split(" ");
    return sentenceAsArray.join(` ${interruptingWord} `);
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = interrupter;
} catch (e) {
  return null;
}
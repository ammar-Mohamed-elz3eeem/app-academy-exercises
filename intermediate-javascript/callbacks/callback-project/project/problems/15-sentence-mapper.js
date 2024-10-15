/*******************************************************************************
Write a function `sentenceMapper` that accepts a sentence and a callback as arguments.
The function should return a new sentence where every word of the original sentence
becomes the result of passing the word to the callback.

Examples:

let result1 = sentenceMapper("what is the answer?", function(word) {
    return word.toUpperCase() + "!";
});
console.log(result1); // 'WHAT! IS! THE! ANSWER?!'

let removeVowels = function(word) {
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!"aeiou".includes(char)) {
            newWord += char;
        }
    }
    return newWord;
};

let result2 = sentenceMapper("this is pretty cool right", removeVowels);
console.log(result2); // 'ths s prtty cl rght'
*******************************************************************************/

/**
 * This function accepts a sentence and a callback
 * as arguments. The function should return a new
 * sentence where every word of the original
 * sentence becomes the result of passing the word
 * to the callback.
 *
 * @param {string} sentence
 *     This is the sentence to run mapper on.
 *
 * @param {CallableFunction} callback
 *     This is the mapper function to run on
 *     every word of the sentence.
 *
 * @returns
 *     a new sentence where every word of the original
 *     sentence becomes the result of passing the word
 *     to the callback.
 */
let sentenceMapper = function(sentence, callback) {
    const sentenceAsArray = sentence.split(" ");
    const newSentence = [];

    for (let i = 0; i < sentenceAsArray.length; i++) {
        const word = sentenceAsArray[i];
        newSentence.push(callback(word));
    }

    return newSentence.join(" ");
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = sentenceMapper;

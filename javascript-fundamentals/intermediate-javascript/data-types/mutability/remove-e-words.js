/**
 * This function accepts a sentence string as an arg.
 * The function should return a new string, containing
 * only the words that don't have the letter "e" in them.
 *
 * @param {string} sentence
 *     This is the sentence to operate on.
 *
 * @returns
 *     new string, containing only the words that don't have
 *     the letter "e" in them.
 */
function removeEWords (sentence) {
  let newStr = "";
  const words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const lowerCasedWord = word.toLowerCase();
  
    if (!lowerCasedWord.includes('e')) {
      newStr += word + " ";
    }
  }

  return newStr.trim();
}

console.log(removeEWords("What time is it everyone?")); // 'What is it'
console.log(removeEWords("Enter the building")); // 'building'

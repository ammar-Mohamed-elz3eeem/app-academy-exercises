/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
the scorer (string) and a point value (number). `countScores(people)` should
return an object that has key-value pairs listing each person who scored as a key
and the sum of the total points for the game as their value.


Example 1:
let ppl = [{name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];

console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }

Example 2:
let peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }
***********************************************************************/

/**
 * This function takes in an array of score objects (people)
 * as its input. A score object has two key-value pairs: the
 * scorer (string) and a point value (number). the function
 * should return an object that has key-value pairs listing
 * each person who scored as a key and the sum of the total
 * points for the game as their value.
 *
 * @param {Array<Object>} people
 *     This is the array containing person as object.
 *
 * @returns
 *     an object that has key-value pairs listing each person
 *     who scored as a key and the sum of the total points for
 *     the game as their value.
 */
function countScores(people) {
  // Your code here
  const scoresObject = people.reduce(function (acc, curr) {
    const { name, score } = curr;

    if (acc[name] !== undefined) {
      acc[name] += score;
    } else {
      acc[name] = score;
    }

    return acc;
  }, {});

  return scoresObject;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countScores;
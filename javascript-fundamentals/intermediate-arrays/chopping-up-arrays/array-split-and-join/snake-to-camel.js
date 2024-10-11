// Your code here

/**
 * This function takes in a snake_cased string and returns
 * a PascalCased version of the string. snake_case is where
 * each word is separated with underscores (_). PascalCase
 * is a string where the first char of each word is capital,
 * all other chars lowercase.
 *
 * @param {string} snakeStr
 *    This is the snake case string to convert to PascalCase.
 *
 * @returns
 *     a PascalCased version of the string.
 */
function snakeToCamel (snakeStr) {
  const snakeStrAsArr = snakeStr.split("_");
  const pascalStrAsArr = [];

  for (let i = 0; i < snakeStrAsArr.length; i++) {
    const word = snakeStrAsArr[i].toLowerCase();
    pascalStrAsArr.push(word[0].toUpperCase() + word.slice(1));
  }

  return pascalStrAsArr.join("");
}

console.log(snakeToCamel("snakes_go_hiss")); // 'SnakesGoHiss'
console.log(snakeToCamel("say_hello_world")); // 'SayHelloWorld'
console.log(snakeToCamel("app_academy_is_cool")); // 'AppAcademyIsCool'
console.log(snakeToCamel("APp_ACADEMY_iS_cOol")); // 'AppAcademyIsCool'

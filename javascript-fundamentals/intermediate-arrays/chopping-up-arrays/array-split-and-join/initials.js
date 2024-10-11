/**
 * This function accepts a full name as an arg. The
 * function should return the initials for that name.
 *
 * @param {string} name
 *     This is the name to get its initials.
 *
 * @returns
 *     the initials for that name.
 */
function initials (name) {
  const nameAsWords = name.split(" ");
  let initials = "";

  for (let i = 0; i < nameAsWords.length; i++) {
    initials += nameAsWords[i][0].toUpperCase();
  }

  return initials;
}

console.log(initials('anna paschall')); // 'AP'
console.log(initials('Mary La Grange')); // 'MLG'
console.log(initials('brian crawford scott')); // 'BCS'
console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'

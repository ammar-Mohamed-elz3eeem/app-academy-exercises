/***********************************************************************
Write a recursive function `iceCreamShop(flavors, favorite)` that takes in an
array of ice cream flavors available at the ice cream shop, as well as the
user's favorite ice cream flavor. Recursively find out whether or not the shop
offers their favorite flavor.

Examples:
iceCreamShop(['vanilla', 'strawberry'], 'blue moon'); // false
iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'); // true
iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio'); // false
iceCreamShop(['moose tracks'], 'moose tracks'); // true
iceCreamShop([], 'honey lavender'); // false
***********************************************************************/


// your code here

/**
 * This function takes in an array of ice cream flavors
 * available at the ice cream shop, as well as the user's
 * favorite ice cream flavor. Recursively find out whether
 * or not the shop offers their favorite flavor.
 *
 * @param {Array} flavors
 *     This is the array of available flavors.
 *
 * @param {string} favFlavor
 *     This is the favorite flavor to search for.
 *
 * @returns
 *     an indication of whether or not the shop offers
 *     the given favorite flavor.
 */
function iceCreamShop(flavors, favFlavor) {
  if (flavors.length === 0) return false;
  return flavors[0] === favFlavor ||
    iceCreamShop(flavors.slice(1), favFlavor);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = iceCreamShop;
} catch (e) {
  module.exports = null;
}

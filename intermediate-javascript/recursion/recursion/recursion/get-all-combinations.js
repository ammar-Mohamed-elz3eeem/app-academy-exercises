const data = {
  email: "email@email.com",
  name: "Ammar Massoud",
  phone: "01007119762",
  featuredCategory1: [1, 2, 3, 4],
  featuredCategory2: [],
  featuredCategory3: [],
  featuredCategory4: [],
  featuredCategory5: [5, 6, 7, 8],
  // featuredCategory6: [9, 10, 11, 12],
  // featuredCategory7: [],
  featuredCategory8: [13, 14],
};

// Extract featuredCategories that have non empty array
const notEmptyFeatured = Object.keys(data).filter(
	(key) => key.startsWith("featured") && data[key].length > 0
);

function getAllCombinations (keys, current = {}) {
  // Base Case: if no keys anymore return the current combination
  if (keys.length === 0) {
    return [current];
  }

  // initialize variable result to collect all combinations
  let result = [];

  for (let i = 0; i < data[keys[0]].length; i++) {
    let temp = { ...current };
    temp[keys[0]] = data[keys[0]][i];
    result = result.concat(...getAllCombinations(keys.slice(1), temp));
  }

  return result;
}

console.log(getAllCombinations(notEmptyFeatured));

/*
result = getAllCombinations(notEmptyFeatured);
result = [
  {
    featuredCategory1: 1
    featuredCategory5: 5
    featuredCategory6: 9
    featuredCategory8: 13
  },
  {
    featuredCategory1: 1
    featuredCategory5: 5
    featuredCategory6: 9
    featuredCategory8: 14
  },
  {
    featuredCategory1: 1
    featuredCategory5: 5
    featuredCategory6: 10
    featuredCategory8: 13
  },
  {
    featuredCategory1: 1
    featuredCategory5: 5
    featuredCategory6: 10
    featuredCategory8: 14
  }
  {
    featuredCategory1: 1
    featuredCategory5: 5
    featuredCategory6: 11
    featuredCategory8: 13
  },
  {
    featuredCategory1: 1
    featuredCategory5: 5
    featuredCategory6: 11
    featuredCategory8: 14
  }
  ....
]

*/

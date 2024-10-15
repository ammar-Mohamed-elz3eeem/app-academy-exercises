let bigArray = ["apple", 14, 32, 100, { name: "party" }, ["pineapple"]];

const [fruit, num1, num2, num3, { name }, [fruitAgain]] = bigArray;
console.log(fruit); // apple
console.log(num1); // 14
console.log(num2); // 32
console.log(num3); // 100
console.log(name); // party
console.log(fruitAgain); // pineapple

// Example:
// let [firstEl] = bigArray;
// console.log(firstEl) // prints "apple"

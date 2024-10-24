// Your code here
const Employee = require('./employee')

const johnWick = new Employee("John Wick", "Dog Lover");

// setTimeout(johnWick.sayName, 2000); // undefined says hello
setTimeout(johnWick.sayName.bind(johnWick), 2000); // John Wick says hello

setTimeout(johnWick.sayOccupation, 2000); // undefined is a undefined
setTimeout(johnWick.sayOccupation.bind(johnWick), 2000); // John Wick is a Dog Lover

//Beginner - Lost Without a Map

//$ babel doubleArray.js | node
console.log("Lost Without a Map")

// Given and array of integers (x), return the array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.

const maps = (x) => {return x.map(num => num*2)}



console.log(maps([1, 2, 3])) //[2, 4, 6]
console.log(maps([4, 1, 1, 1, 4])) //[8, 2, 2, 2, 8]


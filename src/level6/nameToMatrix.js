//babel nameToMatrix.js | node

console.log("nameToMatrix.js")

// Given a name, turn that name into a perfect square matrix (nested array with the amount 
// of arrays equivalent to the length of each array).

// You will need to add periods to the end of the name, as necessary, to turn it into a matrix.

// Example: "Bill" ==> [["B", "i"], ["l", "l"]]

// Example: "Frank" ==> [["F", "r", "a"], ["n", "k", "."], [".", ".", "."]]

// If the name has a length of 0, return "name must be at least one letter"


const matrixfy = str => {
	return str
  // code here
};

console.log(matrixfy('Franklin'))//[['F', 'r', 'a'], ['n', 'k', 'l'], ['i', 'n', '.']]
console.log(matrixfy('A'))//[['A']]
console.log(matrixfy(''))//'name must be at least one letter'
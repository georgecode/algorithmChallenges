//babel nameToMatrix.js | node

console.log("nameToMatrix.js")

// Given a name, turn that name into a perfect square matrix (nested array with the amount 
// of arrays equivalent to the length of each array).

// You will need to add periods to the end of the name, as necessary, to turn it into a matrix.

// Example: "Bill" ==> [["B", "i"], ["l", "l"]]

// Example: "Frank" ==> [["F", "r", "a"], ["n", "k", "."], [".", ".", "."]]

// If the name has a length of 0, return "name must be at least one letter"


const matrixfy = str => {
	if(str.length==0){
		return 'name must be at least one letter'
	}
	if(str.length==1){
		return [str.split('')]
	}

	let size = Math.ceil(Math.sqrt(str.length));
	let add=  Math.pow(size,2)-str.length;
	for(let i=0;i<add;i++){
		str=str+="."
	}
	let regexSplit = new RegExp(".{1,"+size+"}","g");
	str =str.match(regexSplit);

	const matrix = str.map(x => x.split(""));

	return matrix
};

console.log(matrixfy('Franklin'))//[['F', 'r', 'a'], ['n', 'k', 'l'], ['i', 'n', '.']]
console.log(matrixfy('A'))//[['A']]
console.log(matrixfy(''))//'name must be at least one letter'
console.log(matrixfy('Jo'))//

//babel sumSquares.js | node
console.log("sumSquares.js")

// you are given a program sumSquares 
// that takes an array as input and returns 
// the sum of the squares of each item in an array. For example:
//sumSquares([1,2,3,4,5]) === 55 // 1 ** 2 + 2 ** 2 + 3 ** 2 + 4 ** 2 + 5 ** 2

//Shorten the code such that it meets the requirements.

// Original code provided
// function sumSquares(array) {
//   var result = 0;
//   for (let i = 0; i < array.length; i++) {
//     result += array[i] ** 2;
//   }
//   return result;
// }



// function sumSquares(array) {
// 	return	array.reduce(function(sum, value) {
//   		return sum + Math.pow(value,2);
// 	}, 0);
// }



// const sumSquares = (array)=>{ 
// 	return array.reduce((sum, value) => {
//   		return sum + Math.pow(value,2);
// 	},0);
// }


//Best way but babel is not compileing this es7 ** operator
// const sumSquares = (array)=> 
//	array.reduce((sum, value) => sum + value ** 2
// 	,0);

const sumSquares = (array)=> 
	array.reduce((sum, value) => sum + Math.pow(value,2)
	,0);


console.log(sumSquares([1,2,3,4,5])) //55
console.log(sumSquares([7,3,9,6,5])) //200
console.log(sumSquares([11,13,15,18,2])) //843
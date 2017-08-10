console.log("pickASetOfFirstElements.js")
// Write a JavaScript function to get the first element of an array. 
// Passing a parameter n (default=1) will return the 
// first n elements of the array. If n == 0 return an empty array ([]);

function first(arr, n = 1) {
	return arr.slice(0,n) 
}


var arr = ['a', 'b', 'c', 'd', 'e'];
console.log(first(arr)) //['a'];
console.log(first(arr, 2)) //['a', 'b']
console.log(first(arr, 3)) //['a', 'b', 'c'];
console.log(first(arr, 0)) //[];

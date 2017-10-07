//convertHashToArray.js

//babel convertHashToArray.js | node

console.log("convertHashToArray.js")


// convert this 
// {name: 'Jeremy', age: 24, role: 'Software Engineer'}

// to this
//  [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]

//Must be in ABC order

function convertHashToArray(hash){

	let arr = [];
	Object.keys(hash)
	      .sort()
	      .forEach(function(v) {
	          arr.push([v, hash[v]])
	       });
	return arr

}

let testHash = {name: 'Jeremy', zoo: 'San Fran', age: 24, role: 'Software Engineer'}
console.log(convertHashToArray(testHash))
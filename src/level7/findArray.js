
//$ babel findArray.js | node
console.log("findArray.js")

// You are given two arrays arr1 and arr2, where arr2 always contains integers.
// Write the function find_array(arr1, arr2)

function find_array(arr1, arr2){
	let solution = []
	for(let i =0;i<arr2.length;i++){
		if(typeof arr1[arr2[i]] !== 'undefined'){
			solution.push(arr1[arr2[i]])
		}
	}
	return solution
}

// Shorter but less readable way
// const findArray = (arr1, arr2) =>  arr2.map(e=> arr1[e]).filter(e=>e);


console.log(find_array(['a', 'a', 'a', 'a', 'a'],[2, 4])) //['a', 'a']
console.log(find_array([0, 1, 5, 2, 1, 8, 9, 1, 5],[1, 4, 7])) //[1, 1, 1]
console.log(find_array([0, 3, 4],[2, 6])) //[4]
console.log(find_array(["a","b","c","d"],[2,2,2])) //["c","c","c"]
console.log(find_array(["a","b","c","d"],[3,0,2])) //["d","a","c"]

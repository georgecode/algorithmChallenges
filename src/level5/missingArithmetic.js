//babel missingArithmetic.js | node

console.log("missingArithmetic.js")

//Find the missing term in an Arithmetic Progression

// An Arithmetic Progression is defined as one 
// in which there is a constant difference between 
// the consecutive terms of a given series of numbers. 
// You are provided with consecutive elements of an 
// Arithmetic Progression. There is however one hitch:
// exactly one term from the original series is 
// missing from the set of numbers which have been 
// given to you. The rest of the given series is the 
// same as the original AP. Find the missing term.

// You have to write the function findMissing(list), 
// list will always be at least 3 numbers. The missing 
// term will never be the first or last one.




var findMissing = function (list) {
	let listRev = list.slice().reverse()
	let diffArr =[]  
	for(let i =0;i<list.length-1;i++){
		diffArr.push(listRev[i]-listRev[i+1])
	}
	
	let diff = Math.min(...diffArr)

	//for negative nums
	if(diff<0){
		diff =Math.max(...diffArr)
	}

	for(let i=0;i<list.length;i++){
		if(list[i]+diff!= list[i+1]){
			return list[i]+diff
		}
	}
}


console.log(findMissing([1, 3, 4]))//2
console.log(findMissing([1, 2, 4]))//3

console.log(findMissing([ 6, 1, -4, -9, -14, -24, -29, -34, -39, -44 ]))//-19


console.log(findMissing([ -2, -3, -4, -5, -7 ]))//-6
// console.log(findMissing())//
// console.log(findMissing())//
// console.log(findMissing())//
















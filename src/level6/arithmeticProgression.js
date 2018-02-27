//babel arithmeticProgression.js | node
console.log("arithmeticProgression.js")

// In this Kata, you will be given an array of 
// integers and your task is to return the number 
// of arithmetic progressions of size 3 that are possible 
// from that list. In each progression, the differences between 
// the elements must be the same.

// solve([1,2,3,5,7,9]) = 5, as follows: [1,2,3], [1,3,5],[1,5,9],[3,5,7], and [5,7,9].
//                                          +1      +2     +4       +2            +2
// All inputs will be sorted.

function solve(arr){
	let end = arr[arr.length-1]
	let finalSet =[]

	for(let i=0;i<=end;i++){
		//set maker
		for(let j=arr[0];j<=end;j++){
			let set=[j,j+i,j+i+i]
			//check array
			if(arr.includes(set[0])&&arr.includes(set[1])&&arr.includes(set[2])){
				if(set[1]<=end&&set[2]<=end&&set[1]!=set[2]){
					finalSet.push(set)
				}
			}//check array END	
		}//set maker END
	}	
  //console.log("this is the end of funk")
  return finalSet.length
}

console.log(solve([1,2,3,4,5]))//4
console.log(solve([1,2,3,5,7,9]))//5
console.log(solve([0,5,8,9,11,13,14,16,17,19]))//10
console.log(solve([0,1,2,3,5,6,7,11,13,15,17,19]))//17



















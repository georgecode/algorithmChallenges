//babel peakArrayIndex.js | node
console.log("peakArrayIndex.js")

// Given an array of ints, return the index such that the sum 
// of the elements to the right of that index equals the sum 
// of the elements to the left of that index. If there is no 
// such index, return -1.

// function peak(arr){
//  // console.log(arr.slice(0,3))
//  //  console.log(arr[3])
//  // console.log(arr.slice(4,arr.length))
//  // // console.log(arr[3])
//  const sum = (total,num) => total+num;

 

//  for(let i =1;i<arr.length-1;i++){

//  	let left = arr.slice(0,i).reduce(sum)
//  	// let index = arr[i]
//  	let right = arr.slice(i+1,arr.length).reduce(sum)
//  	if(left == right){
//  		return i
//  	}
//  	console.log(i)
//  }

//  return -1;
// }


const peak=(arr)=>{
 const sum = (total,num) => total+num;

 for(let i =1;i<arr.length-1;i++){

 	let left = arr.slice(0,i).reduce(sum)
 	let right = arr.slice(i+1,arr.length).reduce(sum)
 	if(left == right){
 		return i
 	}

 }
 return -1;
}

console.log(peak([1,2,3,5,3,2,1]))//3
console.log(peak([1,12,3,3,6,3,1]))//2
console.log(peak([10,20,30,40]))//-1













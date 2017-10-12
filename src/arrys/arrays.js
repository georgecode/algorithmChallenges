// babel arrays.js | node

console.log("arrays.js!!!!!")

//sorting numbers
const sortNum = (a,b) => a-b; 

const sortTheNumbers = (num) => num.sort(sortNum)

//console.log(sortTheNumbers([8,1,10,2,7,9,6,11,20,3,4,5]))//[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 20 ]

//-------------------------------------------------

//RegX .match()


// const vowelmatch = (input)=> input.match(/[zstp]/)


// // let words2 = "c".match(/[a]/)
// // console.log(words1)

// function countItems(arr, item) {
// 	let counter = 0;
// 	  for(var i =0;i<arr.length;i++){
// 	  	if(typeof arr[i] === 'string'){

// 	  		if(arr[i] == item){
// 	  			counter+=1;
// 	  		}  		
// 	  	}else{
// 	  		for(var j=0;j<arr[i].length;j++){
// 	  			if(arr[i][j]==item){
// 	  				counter+=1;
// 	  			}
// 	  		}

// 	  	}

// 	}
// 	return counter
// }

// var arr = [
//   "apple",
//   ["banana", "strawberry", "apple"]
// ];
// console.log(countItems(arr, "apple"));










// function findShortest(vectors) {

// 	let little = 9999999999999999999999z;
// 	let answer = [];
// 	let vectorTotal = (input)=>{
// 		let squared = Math.pow(input[0], 2)+Math.pow(input[1], 2)+Math.pow(input[2], 2)
// 		return Math.sqrt(squared);
// 	}

// 	for(let i=0;i<vectors.length;i++){
// 		console.log(vectors[i])	
// 		let sumOfV = vectorTotal(vectors[i])

// 		console.log(sumOfV)
// 		if(sumOfV<little){
// 			little = sumOfV
// 			answer = vectors[i]

// 		}


// 	} //END i
// 	return answer

// }//END  findShortest()

// var vectors = [ [1, 1, 1], [2, 2, 2], [3, 3, 3] ];
// var shortest = findShortest(vectors);
// // Expected output: 1,1,1
// console.log(shortest);










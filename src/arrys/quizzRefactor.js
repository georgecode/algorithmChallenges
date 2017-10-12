
//$babel quizzRefactor.js | node
//The es6 versions I ran with bable
//https://jsfiddle.net/2mpb260m/

//Add console to jsfiddle
//https://stackoverflow.com/questions/39130610/how-to-get-console-inside-jsfiddle

//Challange 2 ------------------------------

const countItems = (arr, item)=> {
	let counter = 0;
	arr.forEach((i)=>{
		typeof i === 'string' ?
			i === item ? counter+=1 : null
		: 
			i.forEach((j)=>{
				j == item ? counter+=1 : null
			})
	})
	return counter
}

let arr = [
  "apple",
  ["banana", "strawberry", "apple"]
];
console.log(countItems(arr, "apple"));



//Challange 3 ------------------------------


const findShortest = (vectors)=>{
	let little = Number.MAX_SAFE_INTEGER;
	let answer = [];
	let vectorTotal = (input)=>{
		let squared = Math.pow(input[0], 2)+Math.pow(input[1], 2)+Math.pow(input[2], 2)
		return Math.sqrt(squared);
	};
	vectors.forEach((i)=>{
		let sumOfV = vectorTotal(i)
		sumOfV<little ? 
			(answer = i,little = sumOfV)
			: null
	})
	return answer
}



var vectors = [ [1, 1, 1], [2, 2, 2], [3, 3, 3] ];
var shortest = findShortest(vectors);
// Expected output: 1,1,1
console.log(shortest);
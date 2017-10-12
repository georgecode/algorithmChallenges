//Make sure you have babel installed


//This is how you run it
//$babel quizz.js | node

//https://jsfiddle.net/bvhrk4j2/

//Add console to jsfiddle
//https://stackoverflow.com/questions/39130610/how-to-get-console-inside-jsfiddle

//Challange 2 ------------------------------
function countItems(arr, item) {
	let counter = 0;
	  for(var i =0;i<arr.length;i++){
	  	if(typeof arr[i] === 'string'){
	  		console.log('its a string')

	  		if(arr[i] == item){
	  			counter+=1;
	  		}  		
	  	}else{
	  		console.log('its an array')
	  		for(var j=0;j<arr[i].length;j++){
	  			if(arr[i][j]==item){
	  				counter+=1;
	  			}
	  		}

	  	}

	}
	return counter
}

var arr = [
  "apple",
  ["banana", "strawberry", "apple"]
];
console.log(countItems(arr, "apple"));



//Challange 3 ------------------------------

function findShortest(vectors) {
	let little = Number.MAX_SAFE_INTEGER;
	let answer = [];
	let vectorTotal = (input)=>{
		let squared = Math.pow(input[0], 2)+Math.pow(input[1], 2)+Math.pow(input[2], 2)
		return Math.sqrt(squared);
	}

	for(let i=0;i<vectors.length;i++){
		let sumOfV = vectorTotal(vectors[i])
		if(sumOfV<little){
			little = sumOfV
			answer = vectors[i]
		}
	}
	return answer

}

var vectors = [ [1, 1, 1], [2, 2, 2], [3, 3, 3] ];
var shortest = findShortest(vectors);
// Expected output: 1,1,1
console.log(shortest);



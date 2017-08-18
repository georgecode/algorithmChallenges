console.log("InvertValues.js")


//BEST WAY
// function invert(array) {
//    return array.map( x => x === 0 ? x : -x);
// }




function invert(array) {
	let inverted = []
	array.forEach(function(number){
		if(number == 0){
			inverted.push(0)
		}else{
			inverted.push(number*-1)
		}	
	})
	return inverted
}

let x = invert([1,2,3,4,5])//[-1,-2,-3,-4,-5]

console.log(x)

 // return b == true ? "true" : "false"
console.log("summingANumbersDigits.js")

// Write a function named sumDigits which takes a 
// number as input and returns the sum of the absolute 
// value of each of the number's decimal digits. 

function sumDigits(number) {

	

	return Math.abs(number)
	.toString()
	.split('')
	.map((num)=> Number(num))
	.reduce((sum,value) => sum+value, 0)
	// let array =number.toString().split('')

	// if(array[0] == "-"){
	// 	array.shift()
	// 	array[0]= "-" + array[0]
	// }

	// return array.map((num) => Number(num))
	// .reduce((sum,value) => sum+value , 0)
}



console.log(sumDigits(10)) //1
console.log(sumDigits(99)) //18
console.log(sumDigits(-32)) //5
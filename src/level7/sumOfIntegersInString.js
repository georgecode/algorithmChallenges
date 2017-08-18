console.log("sumOfIntegersInString.js")

// Your task in this kata is to implement a 
// function that calculates the sum of the 
// integers inside a string. For example, 
// in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", 
// the sum of the integers is 3635.

//es6
function sumOfIntegersInString(s){
	return s.split(/[\D]+/g)
	//the /S matches anything but white space
	//.test is running the test on each array element	
	.filter((arrElements) => /\S/.test(arrElements))	 
	.map((num) => parseInt(num))
	.reduce((total,num)=>total+num, 0)
}//sumOfIntegersInString


// //es5
// function sumOfIntegersInString(s){

// 	return s.split(/[\D]+/g)
// 	.filter(function(arrElements){
// 		//the /S matches anything but white space
// 		//.test is running the test on each array element
// 		return /\S/.test(arrElements)
// 	})
// 	.map(function(num){
// 		return parseInt(num)
// 	})
// 	.reduce(function(total,num){
// 		return total+num
// 	})

// }//sumOfIntegersInString


let str1= "He11o how 4 are you3"

let str2= "C4t5 are 4m4z1ng."

let str3="The Great Depression lasted fraom 1929 to 1939."
console.log(sumOfIntegersInString(str1)) //18

console.log(sumOfIntegersInString(str2)) //18

console.log(sumOfIntegersInString(str3)) //3868





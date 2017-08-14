console.log("multiplyTheNumber.js")

// Jack really likes his number five: 
// the trick here is that you have to multiply 
// each number by 5 raised to the number of digits 
// of each numbers



function multiply(number){
  let exponent =Math.abs(number).toString().length
  return number * Math.pow(5,exponent)
}


// //first attempt but kinda hard to read

// function multiply(number) {
//   return number * Math.pow(5, Math.abs(number).toString().length);
// }


console.log(multiply(3)) //15
console.log(multiply(10)) //250
console.log(multiply(200)) //25000
console.log(multiply(0)) //0
console.log(multiply(-3)) //-15	

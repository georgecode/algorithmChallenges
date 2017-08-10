console.log("removeExclamation1.js")

// Remove a exclamation mark from the end of string. 
// For a beginner kata, you can assume that the input data 
// is always a string, no need to verify it.




// //es5
// function remove(s){
//   if(s.endsWith('!') === true){
//   	return s.slice(0,s.length-1)
//   }else{
//   	return s
//   }
// }


// es6 if
function remove(s){
  return s.endsWith('!') === true ? s.slice(0,s.length-1) : s 
}


// // best way
// function remove(s){
//   return s.replace( /!$/, '') 
// }


console.log(remove("Hi!")) //"Hi"
console.log(remove("Hi!!!")) //"Hi!!"
console.log(remove("!Hi")) //"!Hi"
console.log(remove("!Hi!")) //"!Hi"
console.log(remove("Hi! Hi!")) //"Hi! Hi"
console.log(remove("Hi")) //"Hi"


// var str = 'To be, or not to be, that is the question.';

// console.log(str.endsWith('question.')); // true
// console.log(str.endsWith('to be'));     // false
// console.log(str.endsWith('to be', 19)); // true
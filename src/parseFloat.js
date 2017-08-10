console.log("parseFloat.js");

// Write function parseFloat (for Javascript parseF) 
// which takes a string and returns a number or Nothing 
// (for Python None, for Javascript null) if conversion is not possible.


// // es5
// function parseF(s) {
//   if(isNaN(parseFloat(s))){
//     return null
//   }else{
//     return parseFloat(s)
//   }
// }

// es6
const parseF = (s) =>{
 return isNaN(parseFloat(s)) ? null : parseFloat(s)
}


console.log(parseF("1")) //1.0
console.log(parseF("shit")) 

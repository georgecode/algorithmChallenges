console.log("removeExclamation.js")
// Remove all exclamation marks from sentence 
// but ensure a exclamation mark at the end of string. 
// For a beginner kata, you can assume that the input 
// data is always a non empty string, no need to verify it.


// ---------examples
// remove("Hi!") === "Hi!"
// remove("Hi!!!") === "Hi!"
// remove("!Hi") === "Hi!"
// remove("!Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!"
// remove("Hi") === "Hi!"


function remove(s){
  return s.replace(/!/g, "").concat("!")
}


//test
let x = remove("Hi!!!")
console.log(x)
//babel removeFirstandLast.js | node

console.log("removeFirstandLast.js")

// function removeChar(str){
//  //You got this!
//  return str.slice(1,str.length).slice(0,-1)

// };

//mine
const removeChar =(str)=> str.slice(1,str.length).slice(0,-1)

//best pratice
const removeChar = str => str.slice(1,-1)

console.log(removeChar('eloquent'))//'loquen'
console.log(removeChar('country'))//'ountr'
console.log(removeChar('person'))//'erso'
// babel codewarsEasy.js | node

console.log("codewarsEasy.js!!!!")

//Sentence Smash
//es5
// function smash (words) {
//     return words.join(' ');
    
    
// };

//es6
 var smash = (words) => words.join(' ');

 console.log(smash(["hello", "world"]))// "hello world"

//----------------------------------------------
 //We Have Liftoff

//es5
//  function liftoff(instructions){
//   instructions.sort().join(' ')+ " liftoff!"
// }
const sortNumber = (a,b) => b-a; 

const liftoff = (instructions) => instructions.sort(sortNumber).join(' ')+ " liftoff!"

console.log(liftoff([8,1,10,2,7,9,6,3,4,5]))//"10 9 8 7 6 5 4 3 2 1 liftoff!"
console.log(liftoff([1,2,4,3,5]))//"5 4 3 2 1 liftoff!"

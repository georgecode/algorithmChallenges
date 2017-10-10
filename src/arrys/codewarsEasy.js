// babel codewarsEasy.js | node

console.log("codewarsEasy.js!!!!")

//Sentence Smash
//es5
// function smash (words) {
//     return words.join(' ');
    
    
// };

//es6
 var smash = (words) => words.join(' ');

 // console.log(smash(["hello", "world"]))// "hello world"



//----------------------------------------------
 //We Have Liftoff

//es5
//  function liftoff(instructions){
//   instructions.sort().join(' ')+ " liftoff!"
// }
const sortNumber = (a,b) => b-a; 

const liftoff = (instructions) => instructions.sort(sortNumber).join(' ')+ " liftoff!"

// console.log(liftoff([8,1,10,2,7,9,6,3,4,5]))//"10 9 8 7 6 5 4 3 2 1 liftoff!"
// console.log(liftoff([1,2,4,3,5]))//"5 4 3 2 1 liftoff!"




//----------------------------------------------
//Move all vowels

// //es5
// function moveVowel(input) {
//   let vArr = []
//   let cArr=[]
//   for(let i = 0;i<input.length;i++){
//   	if(input[i].match(/[aeiou]/)){
//   		vArr.push(input[i])
//   	}else{
//   		cArr.push(input[i])
//   	}
//   }
//   return cArr.join('')+vArr.join('')
//   // return input.match(/a/)
// }


//es6
const moveVowel = (input) =>{ 
	let vArr =[]
	let cArr =[]
	for(let i = 0;i<input.length;i++){
		input[i].match(/[aeiou]/)? vArr.push(input[i]):cArr.push(input[i])
	}
	return cArr.join('')+vArr.join('')
}

console.log(moveVowel("day"))//dya
console.log(moveVowel("apple"))//pplae
console.log(moveVowel("peace"))//pceae
console.log(moveVowel("maker"))//mkrae



//----------------------------------------------
//Remember
// Write a function that takes a string and returns an array of the repeated 
// characters (letters, numbers, whitespace) in the string.

// If a charater is repeated more than once, only show it once in the result array.

// Characters should be shown by the order of their first repetition. 
// Note that this may be different from the order of first appearance of the character.

// Characters are case sensitive.



// remember("apple") => returns ["p"]
// remember("apPle") => returns []          // no repeats, "p" != "P"
// remember("pippi") => returns ["p","i"]   // show "p" only once
// remember('Pippi') => returns ["p","i"]   // "p" is repeated first























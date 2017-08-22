console.log("searchForLetters.js")

// String search

// Create a method to accept one arbitrary string as an argument, 
// and return a string of length 26.

// The objective is to detect if letters of the alphabet 
// (upper or lower case) are present anywhere in the string, 
// and to set each of the 26 characters corresponding to each 
// letter to either '1' if present, '0' if not.

// So if an 'a' or an 'A' appears anywhere in the argument 
// string (any number of times), set the first character of the 
// returned string to '1' otherwise to '0', if 'b' or 'B' the 
// the second to '1', and so on for the rest of the alphabet.

// So the returned string consists only of '1's and '0's.


function change(string){
	let array = []

	//get a string of only letters.toLowerCase()
	const arrayLetters = string.match(/[a-zA-Z]/g)
	.map((letter)=> letter.toLowerCase())
	.join('')

	//loop throught letters a-z
	for(var i = 97;i<=122;i++){
		const regex = new RegExp(String.fromCharCode(i))
		let answer = arrayLetters.match(regex)
		answer != null? array.push("1"):array.push("0")
	}//End for

	return array.join('')

}//End change()


// //Better Way
// function change(string) {
//   string = string.toLowerCase()
//   return 'abcdefghijklmnopqrstuvwxyz'.split('').map(function (c) { 
//     return string.indexOf(c) !== -1 ? 1 : 0;
//   }).join('');
// }



console.log(change('a   **&  bZ')) //'11000000000000000000000001'





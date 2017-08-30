//https://www.codewars.com/kata/caffeine-script/train/javascript

console.log("caffeineScript.js")

// Complete the function caffeineBuzz, which takes a non-zero
// integer as it's one argument.

// If the integer is divisible by 3, return the string "Java".

// If the integer is divisible by 3 and divisible by 4, return
// the string "Coffee"

// If the integer is one of the above and is even, add "Script"
// to the end of the string.

// Otherwise, return the string "mocha_missing!"

function caffeineBuzz(n){
	let string ="mocha_missing!"
	let suffix =""

	if(n%3 ==0 && n%4==0){
		string = "Coffee"
	} else if(n%3==0){
		string = "Java"
	}

	if(n%2 ==0 && string !="mocha_missing!"){
		suffix= "Script"
	}

	return string + suffix
}
// //Better Way
// function caffeineBuzz(n){
//   if (n % 12 === 0) return "CoffeeScript";
//   if (n % 6 === 0) return "JavaScript";
//   if (n % 3 === 0)  return "Java";
//   return "mocha_missing!";
// }


console.log(caffeineBuzz(1)) //"mocha_missing!"
console.log(caffeineBuzz(3)) //"Java"
console.log(caffeineBuzz(6)) //"JavaScript"
console.log(caffeineBuzz(12)) //"CoffeeScript"





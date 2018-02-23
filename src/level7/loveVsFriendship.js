//babel loveVsFriendship.js | node

console.log("loveVsFriendship.js")

// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice stronger than love :-)

// The input will always be in lowercase and never be empty.

const wordsToMarks=(string)=>{
	let total =0;
	for(var i =0;i<string.length;i++){
		total+=string.charCodeAt(i)-96
	}
	return total	
}

console.log(wordsToMarks("attitude"))//100
console.log(wordsToMarks("friends"))//75
console.log(wordsToMarks("family"))//66
console.log(wordsToMarks("selfness"))//99
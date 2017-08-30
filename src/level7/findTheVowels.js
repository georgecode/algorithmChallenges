//babel findTheVowels.js | node
console.log("findTheVowels.js")

// We want to know the index of the vowels in a given word, 
// for example, there are two vowels in the word super (
// the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// NOTE: Vowels in this context refers to 
// English Language Vowels - a e i o u y

// NOTE: this is indexed from [1..n] (not zero indexed!)

function vowelIndices(word){
	let array= []
	for(let i =0;i<word.length;i++){
		if(word[i].search(/[aeiouy]/i) == 0){
			array.push(i+1)
		}
	}
	return array
}


// 'Blue Whale'.indexOf('Whale', 0); // returns  5

console.log(vowelIndices("Mmmm")) //[]
console.log(vowelIndices("Super")) //[2,4]
console.log(vowelIndices("Apple")) //[1,5]
console.log(vowelIndices("YoMama")) //[1,2,4,6]

//babel stringToNumbers.js | node

//NAME//parseInt() reloaded

//console.log("stringToNumbers.js")

// In this kata we want to convert a string into an integer. 
// The strings simply represent the numbers in words.

// Examples:

// "one" => 1
// "twenty" => 20
// "two hundred forty-six" => 246
// "seven hundred eighty-three thousand nine hundred and nineteen" => 783919
// Additional Notes:

// The minimum number is "zero" (inclusively)
// The maximum number, which must be supported is 1 million (inclusively)
// The "and" in e.g. "one hundred and twenty-four" is optional, 
// in some cases it's present and in others it's not
// All tested numbers are valid, you don't need to validate them

function parseInt(string) {
	console.log(string)
	const words = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'ten': 10,
    'eleven': 11,
    'twelve': 12,
    'thirteen': 13,
    'fourteen': 14,
    'fifteen': 15,
    'sixteen': 16,
    'seventeen': 17,
    'eighteen': 18,
    'nineteen': 19,
    'twenty': 20,
    'thirty': 30,
    'forty': 40,
    'fifty': 50,
    'sixty': 60,
    'seventy': 70,
    'eighty': 80,
    'ninety': 90,
	'hundred' : 100,	
    'thousand': 1000,
    'one million': 1000000
	}
	

	const hundredsMaker=(arr)=>{
		let hundred = 0;
		let hSliced = arr.slice(0,arr.findIndex(elem=> elem == 'hundred'))
		return words[hSliced]*100		
	}

	const tensMaker=(arr)=>{
		let tensHolder = 0;
		for(let i =0;i<arr.length;i++){
			tensHolder += words[arr[i]]
		}
		return tensHolder		
	}

////---MILLION
	if(string.includes('million')){
		return 1000000
	} 

////---SET String and place holder variables
	string = string.replace(/-/g, " ").split(" ").filter(word => word != "and")

	let thous =0;
	let hundo =0;
	let tens =0;

////---THOUSANDS
	if(string.includes('thousand')){
		let tHundo=0;
		let tTens=0;
		let tSliced = string.slice(0,string.findIndex(elem=> elem == 'thousand'))
		
		if(tSliced.includes("hundred")){
			tHundo = hundredsMaker(tSliced)
		}

		tSliced = tSliced.slice(tSliced.findIndex(elem=> elem == 'hundred')+1,tSliced.length)

		if(tSliced.length != 0){
			tTens = tensMaker(tSliced)
		}

		thous = (tHundo+tTens)*1000;

		string = string.slice(string.findIndex(elem=> elem == 'thousand')+1,string.length)
	}

////---HUNDREDS
	if(string.includes('hundred')){
		let hTens = 0;
		hundo = hundredsMaker(string)
		string = string.slice(string.findIndex(elem=> elem == 'hundred')+1,string.length)
	}

////---TENS
	if(string.length != 0){
		tens = tensMaker(string)
	}

  return thous + hundo + tens;

}




console.log(parseInt('two thousand'))//1
console.log(parseInt('one'))//1
console.log(parseInt('twenty'))//20
console.log(parseInt('ninety nine'))//20
console.log(parseInt('two hundred forty-six'))//264
console.log(parseInt("seventy thousand three hundred sixty six"))//
console.log(parseInt("two hundred forty thousand three hundred sixty six"))//
console.log(parseInt("two hundred six thousand three hundred sixty six"))//
console.log(parseInt("two hundred forty-six thousand three hundred sixty six"))//
console.log(parseInt("two hundred forty-six thousand"))//
console.log(parseInt("two hundred thousand three hundred sixty six"))//
console.log(parseInt("one hundred and two"))//
// console.log(parseInt())//
// console.log(parseInt())//
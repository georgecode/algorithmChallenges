//$ babel monkeyTalk.js | node

console.log("monkeyTalk.js!!!!")

//var res = str.replace(/blue/g, "red");

function monkeyTalk(phrase){
	// phrase =phrase.split(' ')

	let monkey = phrase.split(' ').map((i)=>{
		return i[0].match(/[aeiou]/i)? 'eek':'ook'
	})

	monkey[0]= monkey[0].charAt(0).toUpperCase() + monkey[0].slice(1)

	// let monkey = phrase.replace(/hello/gi, "ook")
	// .replace(/everyone/gi, "eek") + "."

 //  	return monkey.charAt(0).toUpperCase() + monkey.slice(1)
 return monkey.join(' ') + "."
	
}

console.log(monkeyTalk('Hello'))//'Ook.'
console.log(monkeyTalk('Everyone'))//'Eek.'
console.log(monkeyTalk('Hello Everyone'))//'Ook eek.'
console.log(monkeyTalk('Everyone Hello'))//'Eek ook.'
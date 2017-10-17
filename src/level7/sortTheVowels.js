//sortTheVowels.js
//$ babel sortTheVowels.js | node

console.log("sortTheVowels.js!!!!!")

// function sortVowels(s){
//   //code
// }

const sortVowels = (s)=>{
	let newStr = ''

	if(typeof s === 'string'){
	
		s.split('').forEach((i) =>{

		let isVowel = i.search(/[aeiou]/i);

			isVowel === -1?newStr+= (i+"|"+"\n") 
			: newStr+= ("|" +i+"\n") 
		})
	}

	newStr = newStr.replace(/\s*$/,"");
	return newStr
}



console.log(sortVowels('Codewars'))//'C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|'
console.log(sortVowels('Rnd Te5T'))//'R|\nn|\nd|\n |\nT|\n|e\n5|\nT|'
//console.log(sortVowels(1337))//''
//console.log(sortVowels(undefined))//''
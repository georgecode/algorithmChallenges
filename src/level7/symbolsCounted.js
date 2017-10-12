//$ babel symbolsCounted.js | node

console.log("symbolsCounted.js")

// In this kata you will have to transform each string 
// so that it contains count for every symbol it contains, 
// starting from 2. The order of symbols should be preserved.

//add the number of times a letter appers after it and remove it from the string

// Example: abbreviation => a2b2revi2ton

const transform = (s) => {
 	let newArray = []
 	let repeats = ""

	s.split('').forEach((i)=>{
		let regLetterG = new RegExp(i,"g")
		let letterOccur =(s.match(regLetterG) || []).length

		let regLetter = new RegExp(i)
		let RepeatTest = regLetter.test(repeats);

		if(!RepeatTest){
			if(letterOccur>1){
				newArray.push(i + letterOccur)
				repeats=repeats.concat(i)
			}else{
				newArray.push(i)
			}			
		}

	})//End forEach
	return newArray.join('')
  
}

console.log(transform('elevation'))//'e2lvation'
console.log(transform('transplantology'))//'t2ra2n2spl2o2gy'
console.log(transform('economics'))//'ec2o2nmis'
console.log(transform('embarrassed'))//'e2mba2r2s2d'
console.log(transform('impressive'))//'i2mpre2s2v'

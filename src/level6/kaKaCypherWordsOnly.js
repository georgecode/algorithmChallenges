//$ babel kaKaCypherWordsOnly.js | node

console.log("kaKaCypherWordsOnly.js")

// Write a function KaCokadekaMe that accepts a string word 
// and returns encoded message using ka cypher. 

// Our rules:

// The encoded word should start from ka.
// The ka goes after vowel (a,e,i,o,u)
// When there is multiple vowels together, the ka goes only after the last vowel
// When the word is finished by a vowel, do not add the ka after
// Input/Output

// The word string consists of only lowercase and uppercase characters. 
// There is only 1 word to convert - no white spaces.


function kaCokadekaMe(word){
  return "kawokard";
}



console.log(kaCokadekaMe("a")) //kaa
console.log(kaCokadekaMe("ka")) //kaka
console.log(kaCokadekaMe("aa")) //kaaa
console.log(kaCokadekaMe("Abbaa")) //kaAkabbaa
console.log(kaCokadekaMe("maintenance")) //kamaikantekanakance
console.log(kaCokadekaMe("Woodie")) //kaWookadie
console.log(kaCokadekaMe("Incomprehensibilities")) //kaIkancokamprekahekansikabikalikatiekas

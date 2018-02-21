//babel stringClean.js | node

//Get rid of numbers

console.log("stringClean.js")

// function stringClean(s){
// 	return s.replace(/[0-9]/,"")
//   // Function will return the cleaned string
// }

const stringClean=(s)=>  s.replace(/[0-9]/g,"")

console.log(stringClean("! !"))//"! !"
console.log(stringClean("123456789"))//""
console.log(stringClean("(E3at m2e2!!)"))//"(Eat me!!)"
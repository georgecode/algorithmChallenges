//$ babel csvOfArray.js | node

console.log("csvOfArray.js")

//my version
// const toCsvText = (array)=>{
// 	let str ="";
// 	array.forEach((arr)=>{
// 		str += arr.toString()+"\n"
// 	})
// 	return str.trim()
// };

//better version
function toCsvText(array) {
   return array.join('\n');
}


//const arrTest= [ 0, 1, 2, 3, 4 ]

const arr1 = [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]]

//console.log(toCsvText(arrTest))//  
console.log(toCsvText(arr1))//    
	// '0,1,2,3,4\n'
 //    +'10,11,12,13,14\n'
 //    +'20,21,22,23,24\n'
 //    +'30,31,32,33,34'












console.log("completeThePattern1.js")

// You have to write a function pattern which returns 
// the following Pattern(See Pattern & Examples) 
// upto n number of rows.

// Returning the pattern is not the same as Printing the pattern.
// ####Rules/Note:

// If n < 1 then it should return "" i.e. empty string.
// There are no whitespaces in the pattern.


// function pattern(n){
//  var output="";
//    // Happy Coding ^_^
//  return output;
// }

// console.log(5.repeat(3))


function pattern(n){
	let output="";
	for(var i = 1;i<=n;i++){
		output = output+(i.toString().repeat(i))+'\n'
	}
	return output.trim();
}

console.log(pattern(5))
 //
// 1
// 22
// 333
// 4444
// 55555

console.log(pattern(11))
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// 10101010101010101010
// 1111111111111111111111
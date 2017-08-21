console.log("esreveR.js")

// Write a function reverse which reverses a list 

// const reverse = (input) => input.split("").reverse().join("")


// function reverse(input){
// 	return input.split("").reverse().join("")
// }


function reverse(input){
	return input.reverse()
}

console.log(reverse([1,2,"a",3,false]))//[ false, 3, 'a', 2, 1 ]
//babel listofPresents.js | node

console.log("listofPresents.js")

// Leo's girlfriend asked him to buy a gift list during his next trip, 
// now he wants to know how many of them will he be able to buy.

// The first parameter is Leo's budget; he second one is an array 
// (a list in Groovy) containing the price of each gift. 
// You should return an integer representing the maximum amount of gifts Leo can buy.


function howManyGifts(maxBudget, gifts){
	console.log(gifts)
	return maxBudget
}




console.log(howManyGifts(20, [13, 2, 4, 6, 1]))//4
console.log(howManyGifts(0, [1]))//0
//console.log(howManyGifts(maxBudget, gifts))//
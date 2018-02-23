//babel listofPresents.js | node

console.log("listofPresents.js")

// Leo's girlfriend asked him to buy a gift list during his next trip, 
// now he wants to know how many of them will he be able to buy.

// The first parameter is Leo's budget; he second one is an array 
// (a list in Groovy) containing the price of each gift. 
// You should return an integer representing the maximum amount of gifts Leo can buy.

//My solution
const howManyGifts=(maxBudget, gifts)=>{
	gifts = gifts.sort((a, b)=>{return a - b});
	let total=0;
	for(let i = 0;i<gifts.length;i++){
		total+=gifts[i]
		if(total>maxBudget){
			return i
		}
	}
	return gifts.length	
}

// //better solution
// function howManyGifts(m, g){
//   var i = 0;
//   g = g.sort(function(a, b){return a - b});
//   for(; m - g[i] >= 0; i++){
//     m = m - g[i];
//   }
//   return i;
// }



console.log(howManyGifts(20, [13, 2, 4, 6, 1]))//4
console.log(howManyGifts(0, [1]))//0
//console.log(howManyGifts(maxBudget, gifts))//




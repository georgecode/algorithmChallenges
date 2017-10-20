//$ babel createAHouseCleaningRota.js | node

console.log("createAHouseCleaningRota.js!!!")

// You live in a communal house. Each night, one room's 
// residents are required to clean the dayroom. 
// Your task is to make a random rota for the entire week.

// Write a function that takes a list/array of 
// the current occupied rooms in the house, and 
// returns a list of 7 random rooms. If the number 
// of occupied rooms is equal to or bigger than 7, 
// duplicates are not allowed. If the number is less 
// than 7, duplicates are allowed.


//NOTES
//Needs to return an array of 7
//Duplicates only allowed if the input is less than 7

// randomize array by array length


// function rota(rooms) {
// 	let randArr=[]

// 	while (randArr.length<7){
// 		let randIndex = Math.floor(Math.random()*rooms.length)
// 		if(!randArr.includes(rooms[randIndex])){
// 			randArr.push(rooms[randIndex])
// 		}else{

// 			randArr.length>=rooms.length?randArr.push(rooms[randIndex]):null
// 		}
		
// 	}

//  return randArr
// }




const rota =(rooms)=>{
	let randArr=[]

	while (randArr.length<7){
		let randIndex = Math.floor(Math.random()*rooms.length)
		if(!randArr.includes(rooms[randIndex])){
			randArr.push(rooms[randIndex])
		}else{
			randArr.length>=rooms.length?randArr.push(rooms[randIndex]):null
		}		
	}

 	return randArr
}


console.log(rota(["One", "Two", "Three", "Four", "Five", "Six", "Seven"]))//[ 'Three', 'Six', 'Four', 'Five', 'Two', 'One', 'Seven' ]
console.log(rota(["One", "Two", "Three"]))//[ 'One', 'Three', 'Two', 'One', 'Two', 'Three', 'One' ]
// console.log(rota())//
// console.log(rota())//
console.log("hello power.js")

// ---------examples
// numberToPower(3,2)  // -> 9 ( = 3 * 3 )
// numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10,6) // -> 1000000

//CAN NOT USE Math.pow()

function numberToPower(number, power){
  let total = 1

  for(var i =0;power>i;i++){
  	total *=number
  }

  console.log("total =", total)
}

numberToPower(2, 3)// 8
numberToPower(10,6) // 1000000
//babel fallingSpeed.js | node
console.log("fallingSpeed.js")

// Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), 
// and it takes 80 seconds for the petal to reach the ground from a certain branch.

// Write a function that receives the speed (in cm/s) of a petal as input, 
// and returns the time it takes for that petal to reach the ground from the same branch.

function sakuraFall(v) {
  return v
  // your code here
}

console.log(sakuraFall(5))//80
console.log(sakuraFall(10))//40
console.log(sakuraFall(-1))//0
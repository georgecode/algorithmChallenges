// babel arrays.js | node

console.log("arrays.js!!!!!")

//sorting numbers
const sortNum = (a,b) => a-b; 

const sortTheNumbers = (num) => num.sort(sortNum)

console.log(sortTheNumbers([8,1,10,2,7,9,6,11,20,3,4,5]))//[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 20 ]

//-------------------------------------------------
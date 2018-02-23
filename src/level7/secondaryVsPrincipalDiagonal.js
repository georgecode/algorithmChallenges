//babel secondaryVsPrincipalDiagonal.js | node


// Your task is to find which diagonal is larger (which a diagonal have bigger sum of their elements).

// If the primary diagonal is larger,--> return "Principal Diagonal win!".

// If the secondary diagonal is larger,--> return "Secondary Diagonal win!".

// if it's draw,--> return "Draw!".

// You will always receive matrices of the same dimension

console.log("secondaryVsPrincipalDiagonal.js")

function diagonal(matrix){
	return matrix
// write your code ....
}


let matrix1=[ [2,2,2],
              [4,2,6],
              [1,8,2] ]

let matrix2=[ [1, 2, 2, 5, 1],
              [4, 1, 6, 1, 1],
              [1, 8, 5, 6 ,2],
              [1, 5, 2, 1, 2],
              [1, 8, 2, 6, 1] ]


console.log(diagonal(matrix1))//'Principal Diagonal win!'
console.log(diagonal(matrix2))// 'Secondary Diagonal win!'
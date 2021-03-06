//$ babel grabCSVColumns.js | node

console.log("grabCSVColumns.js!!!!!")

//return a CSV with only the columns specified in the indices array.

// CSV format: 
// The CSV passed in will be a string and will have one or more columns, 
// and one or more rows. The CSV will be of size NxM. 
// Each row is separated by a new line character (\n). 
// There will be no spaces in the CSV string.

// Example format of passed in CSV: "1,2,3\n4,5,6\n7,8,9\n10,11,12" 
// How it would look: 
// 1,2,3
// 4,5,6
// 7,8,9
// 10,11,12

// Indices Array info: 
// The indices will be zero based, so the first column will be 
// represented as a 0 in the indices array. All values in the 
// indices array will be integers from 0 and up. All test cases 
// will have an indices array of one or more integers. Ignore indices 
// that map to a column that doesn't exist. 
// If all the values in the indices array do NOT map to any existing column, 
// return an empty string ("").

// Examples: 
// csvColumns( "1,2,3\n4,5,6" , [0, 1] ) => returns "1,2\n4,5" 
// csvColumns( "1,2\n3,4\n5,6" , [5, 6, 7] ) => returns "" 
// csvColumns( "a,b,c,d,e\n1,2,3,4,5\nf,g,h,i,j" , [1, 3, 5, 7] ) => returns "b,d\n2,4\ng,i"


// function csvColumns(csv, indices){
//   csv = csv.split("\n")
//   let arr =[]
//   csv.forEach((i)=>{
//   	arr.push((i.split(',')))
//   })

//   let str =""
//   arr.forEach((i)=>{
//   	str+="\n"
//   	indices.forEach((j)=>{
//   		i[j]!= undefined ? str+=(i[j]) + ",":null
//   	})//end j
//   	str = str.slice(0,str.length-1)
//   })//end i
//   return str.slice(1,str.length)
// }


const csvColumns = (csv, indices) =>{
  csv = csv.split("\n")
  let arr =[]
  csv.forEach((i)=>{
  	arr.push((i.split(',')))
  })

  let str =""
  arr.forEach((i)=>{
  	str+="\n"
  	indices.forEach((j)=>{
  		i[j]!= undefined ? str+=(i[j]) + ",":null
  	})//end j
  	str = str.slice(0,str.length-1)
  })//end i
  return str.slice(1,str.length)
}

console.log(csvColumns("1,2,3\n4,5,6" , [0, 1]))//"1,2\n4,5"
console.log("##########################\n")
console.log(csvColumns("1,2\n3,4\n5,6", [5, 6, 7]))//""


//console.log(csvColumns())
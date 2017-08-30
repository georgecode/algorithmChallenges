
//$ babel findArray.js | node
console.log("findArray.js")

// You are given two arrays arr1 and arr2, where arr2 always contains integers.

// Write the function find_array(arr1, arr2)

find_array(arr1, arr2){

}

console.log(find_array(['a', 'a', 'a', 'a', 'a'],[2, 4])) //['a', 'a']
console.log(find_array([0, 1, 5, 2, 1, 8, 9, 1, 5],[1, 4, 7])) //[1, 1, 1]
console.log(find_array([0, 3, 4],[2, 6])) //[4]
console.log(find_array(["a","b","c","d"],[2,2,2])) //["c","c","c"]
console.log(find_array(["a","b","c","d"],[3,0,2])) //["d","a","c"]
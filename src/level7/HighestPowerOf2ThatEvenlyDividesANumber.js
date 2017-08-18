//Highest power of 2 that evenly divides a number
console.log("HighestPowerOf2ThatEvenlyDividesANumber.js")

//es6
// const solution = n => "Hello";


//es6 still not sure how this works
//const solution = n => n & -n;

//es5
function solution(num){

	var evenlyDivides =[]
	var power = 0

	for(var i =0;power<num;i++){
		power =Math.pow(2,i)
		if(num%power === 0){
			evenlyDivides.push(power)
		}
	}
	return evenlyDivides.pop()
}//end solution

console.log(solution(123))//1
console.log(solution(192)) //64
console.log(solution(132232)) //8
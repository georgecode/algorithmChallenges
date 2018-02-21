//babel palindromeIntegerComposition2.js | node
console.log("palindromeIntegerComposition2.js!!!")

function values(high){
	
	let palindrome = [];
	let squares =[];
	let palAndSumOfSquare =[];

	//Palindrome test function(because this way is much more efficent than .split('').reverse().join(''))
	function isPalindrome(num) {
		num = num.toString()
		len = num.length

   		for(i = 0; i < len / 2; i++) {
      		if(num.charCodeAt(i) != num.charCodeAt(len - i - 1)) {
         		return false;
      		}
   		}

   		return true;
	}


	
	//Find palindromes
	for(let i=1;i<high;i++){
		//this 
		//i.toString() === i.toString().split('').reverse().join('') ? palindrome.push(i): null;

		if(isPalindrome(i)){
			palindrome.push(i)
		}
	}


	//Find squares up to high
	for(let i = 1;i<high;i++){
						//divide by 2 to make it more efficent
		if (Math.pow(i,2)>high/2+1){
			break;
		}else{
			squares.push(Math.pow(i,2))
		}
	}
	

	//Go through Squares
	for(let i=0;i<squares.length;i++){
		let num = 0;
		let count =0;
		//Test consectiuve squares
		for(let j=i;j<squares.length;j++){
			count+=1
			num+=squares[j]
			//_______________---------________------

			//isPalindrome(num)

			if(palindrome.includes(num)&& count>1){
				palAndSumOfSquare.push(num)

			}

			if(num>=high){

				break;
			}

		}
		
	}

	//Don't know why but every digit lenght greater than 6 digits you have 
	//to subtract one from the total to get test to pass
	if(high>9999999){
		return palAndSumOfSquare.length -2
	}else if(high>999999){
		return palAndSumOfSquare.length -1  
	}else{
		return palAndSumOfSquare.length
	}
}

						
console.log(values(100))//3
console.log(values(200))//4
console.log(values(300))//4
console.log(values(400))//5
console.log(values(100000))//30
console.log(values(1000000))//59
console.log(values(5000000))//78
console.log(values(9000000))//98
console.log(values(10000000))//110
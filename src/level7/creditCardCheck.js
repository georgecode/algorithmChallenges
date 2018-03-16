//babel creditCardCheck.js | node

//Credit card issuer checking

console.log("creditCardCheck.js")

// Given a credit card number we can determine who the 
// issuer/vendor is with a few basic knowns.

// Complete the function that will use the values shown 
// below to determine the card issuer for a given card number. 
// If the number cannot be matched then the function should 
// return the string Unknown.

// | Card Type  | Begins With          | Number Length |
// |------------|----------------------|---------------|
// | AMEX       | 34 or 37             | 15            |
// | Discover   | 6011                 | 16            |
// | Mastercard | 51, 52, 53, 54 or 55 | 16            |
// | VISA       | 4                    | 13 or 16      |


//answer != null? array.push("1"):array.push("0")

function getIssuer(number) {
	numStr=number.toString()
	if(numStr.length == 15){
		if(numStr.slice(0,2)=="34" || numStr.slice(0,2)=="37"){
			return "AMEX"
		}
	}

	else if(numStr.length == 16){
		if(numStr.slice(0,4)==6011){
			return "Discover"
		}
		else if(numStr.slice(0,2)>=51 && numStr.slice(0,2)<=55){
			return "Mastercard"
		}
		else if(numStr.slice(0,1)==4){
			return "VISA"
		}

	}

	else if(numStr.length == 13 && numStr.slice(0,1)==4){
		return "VISA"
	}

	return "Unknown"
}


//MUCH BETTER WAY
// function getIssuer(n) {
//   var s = n.toString();
//   if (/^3[4|7]\d{13}$/.test(s)) return "AMEX";
//   if (/^6011\d{12}$/.test(s)) return "Discover";
//   if (/^5[1-5]\d{14}$/.test(s)) return "Mastercard";
//   if (/^4(\d{12}|\d{15})$/.test(s)) return "VISA";
//   return "Unknown";
// }

console.log(getIssuer(4111111111111111))//VISA
console.log(getIssuer(378282246310005))//AMEX
console.log(getIssuer(9111111111111111))//Unknown
console.log(getIssuer(6011111111111117))//Discover
console.log(getIssuer(5105105105105100))//Mastercard
console.log(getIssuer(9111111111111111))//Unknown
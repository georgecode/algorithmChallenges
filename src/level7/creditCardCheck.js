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


function getIssuer(number) {
	return number
  // Code your solution here
}


console.log(getIssuer(4111111111111111))//VISA
console.log(getIssuer(378282246310005))//AMEX
console.log(getIssuer(9111111111111111))//Unknown
console.log(getIssuer(6011111111111117))//Discover
console.log(getIssuer(5105105105105100))//Mastercard
console.log(getIssuer(9111111111111111))//Unknown
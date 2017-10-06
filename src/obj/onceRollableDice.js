//onceRollableDice.js

//$ babel onceRollableDice.js | node

console.log("onceRollableDice.js!!!")


// //Fix this bad code, attack should make the Character's 
// //opness go up 
// function Character(name, opness) {
//     this.name = name;
//     this.opness = 20;
//     this.attack = opness + ~~(Math.random()*20)+1;
// }






function Character(name, opness) {
    this.name = name;
    this.opness = 20;
    //this.attack = opness + ~~(Math.random()*20)+1;
    this.attack = function(){
    	// console.log(this.opness)
    	console.log(this.opness + Math.random()*20+1)
    	return this.opness + Math.random()*20+1
    }
}

let wizard = new Character("magic man")

console.log(wizard)

wizard.attack()

console.log("vvvvvvvvvvvvvvvv")
console.log(wizard)
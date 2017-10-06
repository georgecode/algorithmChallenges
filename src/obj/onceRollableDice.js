//onceRollableDice.js

//$ babel onceRollableDice.js | node

console.log("onceRollableDice.js!!!")


//Fix this bad code attack should make the Character's 
//opness go up 
function Character(name, opness) {
    this.name = name;
    this.opness = 20;
    this.attack = opness + ~~(Math.random()*20)+1;
}


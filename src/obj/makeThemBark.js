//makeThemBark
//$ babel makeThemBark.js | node
//The .bark() method of a dog should return the string 'Woof!'.

//challenge and solution

console.log("makeThemBark")

function Dog(name, breed, sex, age){
    this.name  = name;
    this.breed = breed;
    this.sex   = sex;
    this.age   = age;
}

var kona = new Dog("kona", "lab", "f", 4)

console.log(kona)

Dog.prototype.bark = function(){
	console.log("Woof!")
}

kona.bark()
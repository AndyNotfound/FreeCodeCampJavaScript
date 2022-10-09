function Animal() { }

Animal.prototype.eat = function() { 
  console.log("nom nom nom"); 
};

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
function Dog() { }

Dog.prototype.bark = () => {
  console.log("Woof!")
}
let beagle = new Dog();
console.log(beagle.bark())
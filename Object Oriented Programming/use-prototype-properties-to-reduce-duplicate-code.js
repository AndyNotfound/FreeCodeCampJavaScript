function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
// Only change code above this line
let beagle = new Dog("Snoopy");
for (let props in beagle){
  if (beagle.hasOwnProperty(props)) console.log(props)
}
console.log(beagle)
console.log (beagle.numLegs)
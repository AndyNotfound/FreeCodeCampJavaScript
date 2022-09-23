function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  numLegs: 4,
  eat: () => {console.log("eating...")},
  describe: () => {console.log(`My name is ${this.name}`)} 
};
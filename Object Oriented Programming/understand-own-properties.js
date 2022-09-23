function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
for (let props in canary){
  if(canary.hasOwnProperty(props)){
    ownProps.push(props)
  }
}
console.log(ownProps);
// Only change code below this line
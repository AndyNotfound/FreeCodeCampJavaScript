function Bird() {
  let weight = 15;
  this.getWeight = () => {
    return weight;
  }
}

let birdie = new Bird()
console.log(birdie.getWeight())
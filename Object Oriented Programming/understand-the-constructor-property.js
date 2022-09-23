function Dog(name) {
  this.name = name;
}
// Only change code below this line
function joinDogFraternity(candidate) {
  let res;
  candidate.constructor === Dog ? res = true : res = false;
  return res;
}
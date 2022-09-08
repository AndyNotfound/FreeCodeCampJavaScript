function confirmEnding(str, target) {
  let regexExp = new RegExp(target + "$");
  return regexExp.test(str);
}
console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("Bastian", "n"));
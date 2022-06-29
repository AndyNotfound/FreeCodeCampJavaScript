function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    let someArray = [...arr];
    newArr.push(someArray);
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
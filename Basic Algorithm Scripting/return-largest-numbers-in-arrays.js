function largestOfFour(arr) {
  let largestArr = [];
  for (let i = 0; i < arr.length; i++){
    let currentNum = 0;
    if (currentNum == 0) currentNum = arr[i][1];
    for (let j = 0; j < arr[i].length; j++){
      if (arr[i][j] > currentNum) currentNum = arr[i][j];
    }
    largestArr.push(currentNum);
  }
  return largestArr;
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]))
function filteredArray(arr, elem) {
  let newArr = [...arr];

  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++){
      if(arr[i][j] === elem){
        newArr.splice(newArr.indexOf(arr[i]), 1)
      }
    }
  }

  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));
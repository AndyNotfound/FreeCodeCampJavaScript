function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let arrLenght = arr.length;
  for (let i = 0; i < arrLenght; i++){
    console.log(arr)
    console.log(newArr)
    if (arr.length !== 0){
      let item = arr.splice(0, size);
      newArr.push(item);
    }
  }
  return newArr;
}
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
function frankenSplice(arr1, arr2, n) {
  let resultArr = arr2.slice(0);
  // if (arr2.length > 0){
  //   for (let i = 0; i < arr1.length; i++){
  //     resultArr.splice(-n , 0 , arr1[i])
  //   }
  //   return resultArr;
  // } else {
  //   return arr1;
  // }
  if (arr2.length > 0){
    for (let i = 0; i < arr1.length; i++){
      resultArr.splice(-n , 0 , arr1[i])
    }
  } else {
    for (let i = 0; i < arr1.length; i++){
      resultArr.push(arr1[i])
    }
  }
  return resultArr;
}
console.log(frankenSplice([1, 2, 3], [4, 5], 1));
console.log(frankenSplice([1, 2, 3, 4], [], 0));
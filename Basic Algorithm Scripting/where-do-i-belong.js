function getIndexToIns(arr, num) {
  let resultIndex;
  arr.sort(function(a, b){return a - b});
  if(arr.length === 0) resultIndex = 0;
  for (let i = 0; i < arr.length; i++){
    if(arr[i] >= num){
      resultIndex = i;
      break;
    } else{
      resultIndex = i + 1;
    };
  }
  return resultIndex;
}
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
console.log(getIndexToIns([3, 10, 5], 3));
console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([2, 5, 10], 15));
function bouncer(arr) {
  let arrConvert = [];
  for (let i = 0; i < arr.length; i++){
    if(Boolean(arr[i])){
      arrConvert.push(arr[i])
    };
  }
  return arrConvert;
}
console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
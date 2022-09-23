function mutation(arr) {
  let status = true;
  let text = arr[1].split('');
  for (let i = 0; i < text.length; i++){
    console.log(status, text[i]);
    if(arr[0].toLowerCase().includes(text[i].toLowerCase())){
      status = true;
    } else{
      status = false;
      break;
    }
  }
  return status;
}
console.log(mutation(["Mary", "Aarmy"]))
console.log(mutation(["hello", "hey"]))
console.log(mutation(["hello", "neo"]))
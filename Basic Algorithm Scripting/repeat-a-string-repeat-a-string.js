function repeatStringNumTimes(str, num) {
  if (num > 0){
    let repeatedString = [];
    for (let i = 0; i < num; i++){
      repeatedString.push(str);
    }
    return repeatedString.join("");
  } else {
    return "";
  }
}

console.log(repeatStringNumTimes("abc", 3));
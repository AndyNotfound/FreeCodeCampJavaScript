function findLongestWordLength(str) {
  let longestStr = 0;
  let splittedStrArr = str.split(" ");
  for (let i = 0; i < splittedStrArr.length; i++){
    let currentStr = splittedStrArr[i].length;
    if (longestStr == 0) longestStr = splittedStrArr[1].length;
    if (currentStr > longestStr) longestStr = currentStr;
  }
  return longestStr;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
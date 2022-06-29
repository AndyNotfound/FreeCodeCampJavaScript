function quickCheck(arr, elem) {
  let response, index;
  index = arr.indexOf(elem);
  index !== -1 ? response = true : response = false;
  return response;
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
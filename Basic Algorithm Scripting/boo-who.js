function booWho(bool) {
  let val;
  typeof bool === 'boolean' ? val = true : val = false;
  return val;
}

console.log(booWho(null));
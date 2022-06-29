const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  let userOnline = 0;
  for (let user in usersObj){
    if (usersObj[user].online == true){
      userOnline++;
    };
  }
  return userOnline;
}

console.log(countOnline(users));
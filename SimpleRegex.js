function validateUsr(username) {
  let test = /([a-z]|[0-9]|[_])/g
  if(username.length>=4&&username.length<=16){
    console.log(username.match(test))
    return username.match(test).join('')===username?true:false
  }
  return false
}

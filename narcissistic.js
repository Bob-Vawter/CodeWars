function narcissistic(value) {
  // Code me to return true or false
  value = value.toString().split('')
  var result = 0
  for(let i = 0;i<value.length;i++){
    result += (value[i]**value.length)
  }
  return result == value.reduce((a,b)=>a+b)?true:false
}

//kyu 6

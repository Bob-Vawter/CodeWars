//kyu 8
// definitely not an 8
// Implement Array.prototype.filter()

Array.prototype.filter = function (func) {
  var result = []
  for(let i = 0;i<this.length;i++){
    if(func(this[i])){
      result.push(this[i])
    }
  }
  return result
}

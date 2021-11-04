//kyu 7
//filter the number
var FilterString = function(value) {
  return +value.split('').filter(a=>a.match(/[0-9]/)).join('')
}

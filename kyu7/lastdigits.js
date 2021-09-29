//kyu 7
//last digits of a number
function lastDigit(n, d) {
  var arr = n.toString().split('').map(a=>+a)
  return arr.length<d?arr:d>0?arr.slice(arr.length-d):[]
  }

//kyu 7
// make a function that does arithmetic

function arithmetic(a, b, operator){
  var map = {
    'add':'+',
    'subtract':'-',
    'multiply':'*',
    'divide':'/'
  }
  return eval(a+map[operator]+b)
}

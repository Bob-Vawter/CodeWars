//kyu 7
//Multiples
//mine
function multiple(x) {
  var result = ''
  result += x%3==0?'Bang':''
  result += x%5==0?'Boom':''
  return result.length>1?result:'Miss'
}
//cw top
function multiple(x) {
 return x % 15 == 0 ? "BangBoom" : x % 3 == 0 ? "Bang" : x % 5 == 0 ? "Boom" : "Miss"
}

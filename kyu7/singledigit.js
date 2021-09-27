//kyu 7
//single digit
function singleDigit(n) {
  return n<10?n:singleDigit(n.toString(2).split('').map(a=>+a).reduce((a,b)=>a+b,0))
}

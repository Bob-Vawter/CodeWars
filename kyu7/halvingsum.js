//kyu 7
//halving sum
function halvingSum(n) {
  return n>1?n+halvingSum(Math.floor(n/2)):1
}

// Write a program that will calculate the number of trailing zeros in a factorial of a given number.
//
// N! = 1 * 2 * 3 * ... * N
//kyu 5
function zeros (n) {
  var numZero = 0

  while(n>0){
    numZero += Math.floor(n/5)
    n/=5
  }

  return numZero
}

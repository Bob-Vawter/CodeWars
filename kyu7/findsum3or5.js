//kyu 7
// Your task is to write function findSum.
//
// Upto and including n, this function will return the sum of all multiples of 3 and 5.
//
// For example:
//
// findSum(5) should return 8 (3 + 5)
//
// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)
// Sum of all the multiples of 3 or 5
function findSum(n) {
  return Array.from({length: n}, (_, index) => index + 1).filter(a=>a%3==0||a%5==0).reduce((a,b)=>a+b,0)
}

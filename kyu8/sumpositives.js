function positiveSum(arr) {
  var sum = 0
  arr.forEach(n=>{
    sum = n>0?sum+n:sum
  })
  return sum
}
//kyu 8 sum positive integers

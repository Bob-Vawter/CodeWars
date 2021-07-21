//kyu 7
//palindromeChainLength
var palindromeChainLength = function(n, count = 0) {
  n = n.toString()
  var nR = n.split('').reverse().join('')
  if(n===nR){
    return count
  } else {
    count++
    n = +n + (+nR)
    return palindromeChainLength(n,count)
  }
};

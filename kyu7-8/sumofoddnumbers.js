function rowSumOddNumbers(n) {
  var index = 1
  var rowSum = 0
  for(let i=1;i<=n;i++){
    rowSum = 0
    for(let j=1;j<=i;j++){
      rowSum += index
      index+=2
    }
  }
  return rowSum
}

//kyu 7 sum of odd numbers in a pyramid row
//     1
//    3 5
//   7 9 11

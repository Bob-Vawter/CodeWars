//kyu 7
//pairs of integers from m to n
function generatePairs(m, n) {
  var result = []
  for(let i = m;i<=n;i++){
    for(let j=i;j<=n;j++){
      result.push([i,j])
    }
  }
  return result
}

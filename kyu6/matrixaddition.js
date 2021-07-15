//kyu 6
function matrixAddition(a, b){
  var solution = []
  var row = []
  var n = a.length
  for(let i = 0;i<n;i++){
    row = []
    for(let j = 0;j<n;j++){
      row.push(a[i][j]+b[i][j])
    }
    solution.push(row)
  }
  return solution
}

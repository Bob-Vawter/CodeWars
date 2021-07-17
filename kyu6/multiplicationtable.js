function multiplicationTable(row,col){
  var result = []
  for(let i = 1;i<=row;i++){
    result.push(Array.from(Array(col).keys()).map(a=>(a+1)*i))
  }
  return result
}
//kyu 6
//multiplicationTable

function matrix(array) {
  var count = array.length>array[0].length?array[0].length:array.length
  for(let i = 0;i<count;i++){
    array[i][i]=array[i][i]<0?0:1
  }
  return array
}
//kyu 7
//change two-dimensional array

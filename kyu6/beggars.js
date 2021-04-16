//kyu 6
//english beggars

function beggars(values, n){
  var result = new Array(n).fill(0)
  for(let i = 0; i<values.length; i++){
    result[i%n]+=values[i]
  }
  return result
}

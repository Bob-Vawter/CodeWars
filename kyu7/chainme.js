//kyu 7
//chain function
function chain(input, fs) {
  var result = input
  for(let i = 0;i<fs.length;i++){
    result=(fs[i](result))
  }
  return result
}

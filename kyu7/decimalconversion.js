//kyu 7
//decimal conversion
function convert(degrees) {
  var result = []
  var min = (degrees-Math.trunc(degrees))*60
  var sec = (min-Math.trunc(min))*60
  result.push(Math.trunc(degrees))
  result.push(Math.trunc(min))
  result.push(Math.round(sec))
  return result[2]==0&&result[1]==0?result.slice(0,1):result[2]==0?result.slice(0,2):result
}

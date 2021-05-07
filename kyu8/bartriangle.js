//kyu 8
//Localize The Barycenter of a Triangle
function barTriang(p1, p2, p3){
  var result = []
  result.push(+((p1[0]+p2[0]+p3[0])/3).toFixed(4))
  result.push(+((p1[1]+p2[1]+p3[1])/3).toFixed(4))
  return result
}

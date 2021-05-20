//kyu 8
//Training JS #14: Methods of Number object--toString() and toLocaleString()
function colorOf(r,g,b){
  var rgb = '#'
  rgb += r.toString(16).length>1?r.toString(16):'0'+r.toString(16)
  rgb += g.toString(16).length>1?g.toString(16):'0'+g.toString(16)
  rgb += b.toString(16).length>1?b.toString(16):'0'+b.toString(16)
  return rgb
}

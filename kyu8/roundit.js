//kyu 8
//Training JS #32: methods of Math---round() ceil() and floor()
function roundIt(n){
  var magic = n.toString().split('.')
 return magic[0].length==magic[1].length?Math.round(n):(magic[0].length>magic[1].length?Math.floor(n):Math.ceil(n))
}

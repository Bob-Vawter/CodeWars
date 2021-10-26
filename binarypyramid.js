//kyu 7
//Binary Pyramid
function BinaryPyramid(m,n){
  var result = 0
  for(let i = m;i<=n;i++){
    result += +i.toString(2)
  }
  return result.toString(2)
}

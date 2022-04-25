//kyu 7
//nth floyd line
function nthFloyd(n){
  var floor = 1
  for(let i = 1;i<n;i+=floor){
    floor++
  }
  return floor
}

//kyu 7
//apples distribution
function applesDistribution(a, bC, mR) {
  //coding and coding..
  var result = 0
  for(let i = 1;i<=bC;i++){
    if(a%i<=mR){
      result++
    }
  }
  return result
}

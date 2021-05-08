//kyu 8
//be concise II - i need squares
function squaresOnly(array) {
  return array.filter(a=>a**(.5)%1==0)
}

// kyu 8
//to square or not to square
function squareOrSquareRoot(array) {
  return array.map(a=>a**(1/2)%1===0?a**(1/2):a**2);
}

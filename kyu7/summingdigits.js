//kyu 7
//summing a numbers digits
function sumDigits(number) {
  return Math.abs(number).toString().split('').map(a=>+a).reduce((a,b)=>a+b,0)
}

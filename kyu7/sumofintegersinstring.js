//kyu 7
//sum of integers in string
function sumOfIntegersInString(s){
  console.log(s)
  s = s.match(/\d+/g)
  return s?s.reduce((a,b)=>a+(+b),0):0
}

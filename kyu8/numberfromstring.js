//kyu 8
//get number from a string
function getNumberFromString(s) {
  return +s.split('').filter(a=>/\d/.test(a)).join('')
}

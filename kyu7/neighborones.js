//kyu 7
//counter of neighbor ones
function onesCounter(input) {
  return input.join('').split('0').filter(a=>a!='').map(a=>a.length)
}

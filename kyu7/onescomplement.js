//kyu 7
//ones complement
function onesComplement(n) {
  return n.split('').map(a=>+a?'0':'1').join('')
};

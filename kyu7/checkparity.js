//kyu 7
//checkParity
function checkParity(parity, bin){
  var bits = bin.split('').filter(a=>a=='1').length
  parity = parity =='even'?0:1
  return bits%2==parity?0:1
  }

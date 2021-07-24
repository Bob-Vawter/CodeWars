//kyu 7
//kill the kth bit
function killKthBit(n, k) {
  return parseInt(n.toString(2).split('').map((a,i,arr)=>i==arr.length-k?'0':a).join(''),2)
}

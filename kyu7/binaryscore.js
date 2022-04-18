//kyu 7
//Binary scORe
function score(n){
  return n==0?0:parseInt(n.toString(2).replace(/0/g,1),2)
}

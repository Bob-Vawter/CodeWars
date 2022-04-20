//kyu 7
//Binary sXORe
const sxore = function(n){
  return n%4==0?n:(n-1)%4==0?1:(n-2)%4==0?n+1:0
}

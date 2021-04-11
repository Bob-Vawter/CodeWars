//kyu 8
//powers of 2

function powersOfTwo(n){
  return new Array(n+1).fill(0).map((a,i)=>2**i)
}

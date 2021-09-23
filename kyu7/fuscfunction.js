//kyu 7
//the fusc function part1
function fusc(n){
  return n==0?0:n==1?1:n%2==0?fusc(n/2):fusc(Math.floor(n/2))+fusc(Math.ceil(n/2))
}

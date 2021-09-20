//kyu 7
//form the largest
function maxNumber(n){
  return +n.toString().split('').map(a=>+a).sort((a,b)=>b-a).join('')
}

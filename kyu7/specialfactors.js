//kyu 7
//special factor
//mine
function sc(n){
  var facs = factors(n)
  return facs.filter(a=>n.toString(2).includes(a.toString(2)))
}
function factors(n){
  var result = []
  for(let i = 1;i<=n/2;i++){
    if(n%i==0){
      result.push(i)
    }
  }
  if(n>1){
    result.push(n)
  }
  return result
}

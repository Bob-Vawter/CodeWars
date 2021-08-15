//kyu 7
//isprime
function isPrime(n) {
  if(n<2){
    return false
  }
  for(let i = 2;i<=n/2;i++){
    if(n/i===Math.floor(n/i)){
      return false
    }
  }
  return true
}

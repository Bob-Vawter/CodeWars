//kyu 6

function goldbachPartitions(n){
  let arrPrimes = []
  if(n%2===0){
    for(let i = 2;i<=n/2;i++){
      if(isPrime(i)&&isPrime(n-i)){
        arrPrimes.push(i+'+'+(n-i))
      }
    }
  }

  return arrPrimes
}

function isPrime(n){
  for (let i = 2;i<=Math.sqrt(n);i++){
    if(n%i===0){
      return false
    }
  }
  return n===1||n===0?false:true
}

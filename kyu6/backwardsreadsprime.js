function backwardsPrime(start, stop){
  var primesArr = []
  for(let i = start;i<=stop;i++){
    if(isPrime(i) && backPrime(i)){
      primesArr.push(i)
    }
  }
  return primesArr
}

function isPrime(num){
  if(num<=1){
    return false
  }
  if(num == 2){
    return true
  }
  for(let i = 2;i<=Math.floor(Math.sqrt(num));i++){
    if(num%i==0){
      return false
    }
  }
  return true
}

function backPrime(num){
  var backWards = +num.toString().split('').reverse().join('')
  return backWards==num?false:isPrime(backWards)
}

//kyu 6

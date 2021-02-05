// Get the next prime number!
//
// You will get a numbern (>= 0) and your task is to find the next prime number.
//
// Make sure to optimize your code: there will numbers tested up to about 10^12.
//
function nextPrime(n){
  var count = n+1
for(let i = n+1;!isPrime(i);i++){
  count = i+1
}
  return count
}

function isPrime(n){
  for (let i = 2;i<=Math.sqrt(n);i++){
    if(n%i===0){
      return false
    }
  }
  return n===1||n===0?false:true
}

console.log(isPrime(0))
console.log(isPrime(1))
console.log(isPrime(2))

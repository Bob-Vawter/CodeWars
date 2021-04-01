// Digital root is the recursive sum of all the digits in a number.
//
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
// kyu6

function digital_root(n) {
  if(n<10){
    return n
  }
  n = n.toString().split('')
  var sum = 0
  n.forEach(item=>{
    sum += Number(item)
  })
  return digital_root(sum)
}

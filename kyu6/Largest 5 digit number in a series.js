// Largest 5 digit number in a series

function solution(digits){
  var largeNum = Number(digits.substring(0,5))
  for(i=1;i<(digits.length-4);i++){
    console.log(Number(digits.substring(i,i+5)))
    largeNum = largeNum>Number(digits.substring(i,i+5))?largeNum:Number(digits.substring(i,i+5))
  }
  return largeNum
}

console.log(solution('8123914123918235'))
console.log(solution('823'))

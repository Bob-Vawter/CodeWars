//kyu 7
//filter unused digits
function unusedDigits() {
  var result = ''
  for(num of arguments){
    result += num.toString()
  }
  result=result.split('')
  var finalSolution = ''
  for(let i = 0;i<=9;i++){
    if(!result.includes(i.toString())){
      finalSolution += i.toString()
    }
  }
  return finalSolution
}

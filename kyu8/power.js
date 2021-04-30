//kyu 8
//power

function numberToPower(number, power){
  var result = 1
  for(let i = 1;i<=power;i++){
    result *= number
  }
  return result
}

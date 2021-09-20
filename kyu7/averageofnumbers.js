//kyu 7
//average of numbers
function averages(numbers) {
  var result = []
  if(!numbers){
    return result
  }
  for(let i = 0;i<numbers.length-1;i++){
    result.push((numbers[i]+numbers[i+1])/2)
  }
  return result
}

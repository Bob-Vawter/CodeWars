//kyu 6

//two sum

function twoSum(numbers, target) {
  var result = [0,0]
  for(let i = numbers.length-1;i>0;i--){
    var test = numbers.indexOf(target-numbers[i])
  if(test>-1&&test!=i){
      result=[test,i]
    }
  }
  return result
}

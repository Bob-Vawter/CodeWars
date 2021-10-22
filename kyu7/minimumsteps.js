//kyu 7
//minimum steps
function minimumSteps(numbers, value){
  var sum = 0
  var count = -1
  numbers = numbers.sort((a,b)=>a-b)
  for(let i = 0;sum<value&&i<numbers.length;i++){
    sum+=numbers[i]
    count++
  }
  return count
}

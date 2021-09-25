//kyu 7
//Find the Speedcuber's times!
function cubeTimes(times) {
  var fast = times.sort((a,b)=>a-b).shift()
  times.pop()
  return [+(times.reduce((a,b)=>a+b)/3).toFixed(2),fast]
}

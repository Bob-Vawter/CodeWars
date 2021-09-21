//kyu 7
//rock paper scissors oracle
function oracle(gestures){
  var result = []

  var rockWin = gestures.filter(a=>a=='scissors').length
  var rockLose = gestures.filter(a=>a=='paper').length
  if(rockWin>rockLose){
    result.push('rock')
  }

  var paperWin = gestures.filter(a=>a=='rock').length
  var paperLose = gestures.filter(a=>a=='scissors').length
  if(paperWin>paperLose){
    result.push('paper')
  }

  var scissorsWin = gestures.filter(a=>a=='paper').length
  var scissorsLose = gestures.filter(a=>a=='rock').length
  if(scissorsWin>scissorsLose){
    result.push('scissors')
  }

  return result.length?result.join('/'):'tie'

}

//return the winner's army as string, 'Draw' or 'Peace'
function battleCodes(armyLetters, armyNumbers) {
  if(armyLetters.length==0||armyNumbers.length==0){
    return'Peace'
  }
  var letWar = 0, numWar = 0
  armyLetters = armyLetters.split('').map(a=>a.charCodeAt()-96)
  console.log(armyLetters)
  armyNumbers = armyNumbers.split('')
  while(armyLetters.length>0&&armyNumbers.length>0){
    letWar = armyLetters[armyLetters.length-1]
    numWar = armyNumbers[0]
    armyNumbers[0]-=letWar
    if(armyNumbers[0]<=0){
      armyNumbers.shift()
    }
    armyLetters[armyLetters.length-1]-=numWar
    armyLetters[armyLetters.length-2]-=numWar
    if(armyLetters[armyLetters.length-2]<=0){
      if(armyLetters[armyLetters.length-1]>0){
        armyLetters[armyLetters.length-2]=armyLetters[armyLetters.length-1]
        armyLetters[armyLetters.length-1]=0
      } else {
        armyLetters.pop()
        armyLetters.pop()
      }
    }
    if(armyLetters[armyLetters.length-1]<=0){
      armyLetters.pop()
    }
  }
  armyLetters = armyLetters.map(a=>String.fromCharCode(a+96))
  return armyLetters.length>armyNumbers.length?armyLetters.join(''):(armyLetters.length<armyNumbers.length?armyNumbers.join(''):'Draw')
}

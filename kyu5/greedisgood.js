//kyu 5 Greed is Good
// basically farkle

function score( dice ) {
  var map = {}
  var score = 0
  dice.forEach(roll=>{
    map[roll]?map[roll]+=1:map[roll]=1
  })
  for(let i=2;i<=6;i++){
   score += Math.floor((map[i.toString()]||0)/3)*100 *i
  }
  score += Math.floor((map['1']||0)/3)*1000

  score += map['1']%3*100||0
  score += map['5']%3*50||0

  return score
}

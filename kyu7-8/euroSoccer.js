function uefaEuro2016(teams, scores){
  var result ='teams played draw.'
  result = scores[0]==scores[1]?result:(scores[0]>scores[1]?`${teams[0]} won!`:`${teams[1]} won!`)
  return `At match ${teams[0]} - ${teams[1]}, ${result}`
}
//kyu 8

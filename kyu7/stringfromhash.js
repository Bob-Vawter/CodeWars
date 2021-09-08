//kyu 7
//building strings from a hash
function solution(pairs){
  var result = ''
  for(let i in pairs){
    result += `${i} = ${pairs[i]},`
  }
  return result.slice(0,-1)
}

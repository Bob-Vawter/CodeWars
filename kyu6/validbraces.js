//kyu 6 valid braces

function validBraces(braces){
  let map = []
  for(let i=0;i < braces.length; i++){
    if ( braces[i] === "(" || braces[i] === "{" || braces[i] === "["){
      //pushes all left sided brackets onto array
      map.push(braces[i])
    } else{
      //if a right bracket on empty array fail
      if(map.length === 0) return false
      //store most recent left bracket
      let lastValue = map[map.length-1]
      //check if right bracket matches most recent left bracket
      if( (braces[i] === ']' && lastValue === '[') || (braces[i] === '}' && lastValue === '{') || (braces[i] === ')' && lastValue === '('))
      {
        //if true good and remove left bracket
        map.pop()
      } else {
        //else break and fail
        break;
      }
    }
  }
  return map.length === 0
}

//kyu 5
//first non-repeating character

function firstNonRepeatingLetter(s) {
  var sL = s.toLowerCase()
  var dict = {}
  for(let i of sL){
    if(dict[i]){
      dict[i]++
    } else{
      dict[i]=1
    }
  }
  for(let j=0;j<s.length;j++){
    if(dict[s.charAt(j).toLowerCase()]==1){
      return s.charAt(j)
    }
  }
  return ''
}

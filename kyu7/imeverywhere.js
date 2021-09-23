//kyu 7
//im everywhere!
function i(word) {
  var result = 'Invalid word'
  if(!word.length){
    return result
  }
  if(word[0].toLowerCase()==word[0]){
    return result
  }
  if(word[0]=='I'){
    return result
  }
  var valid = word.split('').map(a=>/[aeiou]/i.test(a)?-1:1).reduce((a,b)=>a+b)>0
  return valid?'i'+word:result
}

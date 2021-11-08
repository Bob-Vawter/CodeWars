//kyu 7
// Exclamation marks series #8: Move all exclamation marks to the end of the sentence
function remove(s){
  var tail = s.length
  s = s.split('!').join('')
  return s+'!'.repeat(tail-s.length)
}

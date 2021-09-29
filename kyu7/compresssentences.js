//kyu 7
//compress sentences
function compress(sentence) {
  var table = [... new Set(sentence.toLowerCase().split(' '))]
  return sentence.toLowerCase().split(' ').map(a=>table.indexOf(a)).join('')
}

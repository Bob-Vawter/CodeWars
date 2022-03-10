//kyu 7
//adding arrays
function arrAdder(arr) {
  var sentence = []
  var word = []
  for(let i = 0;i<arr[0].length;i++){
    for(let j = 0;j<arr.length;j++){
      word.push(arr[j][i])
    }
    sentence.push(word.join(''))
    word = []
  }
  return sentence.join(' ')
}

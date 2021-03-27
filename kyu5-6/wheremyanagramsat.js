//kyu 5

function anagrams(word, words) {
  word = word.split('').sort().join('')
  var result = []
  words.forEach(item=>{
    if(item.split('').sort().join('')===word){
      result.push(item)
    }
  })
  return result
}

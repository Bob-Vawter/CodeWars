function duplicateEncode(word){
    word = word.toLowerCase().split('')
    var res = []
    var count = 0
    word.forEach((a)=>{
      count = 0
      word.forEach((b)=>{
      if(a == b){
        count++
      }
      })
      res.push(count)
    })
    res.forEach((a,i)=>{
      res[i] = a===1?'(':')'
    })
    return res.join('')
}
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.1
// kyu 6

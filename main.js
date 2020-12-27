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

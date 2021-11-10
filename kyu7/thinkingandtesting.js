//kyu 7
//thinking and testing how many 'word'
function testit(s){
  s=s.toLowerCase()
  var word=(s.match(/[word]/g)||[])
  var count = 0
  var j = 0
  for(let i = 0;i<word.length;i++){
    if(word[i]=='word'[j%4]){
      j++
      if(word[i]=='d'){
        count++
      }
    }
  }

  return count
}

// better
function testit(s) {
  return (s.match(/w.*?o.*?r.*?d/ig) || []).length;
}

function palindromePairs (words) {
  let index = []
  words.forEach((word,i)=>{
    for(let j = 0;j<words.length;j++){
      if(j!=i){
        if(palindrome(word.toString()+words[j].toString())){
          index.push([i,j])
          // break
        }
      }
    }
  })
  return index
}

function palindrome (word) {
  return word===word.split('').reverse().join('')?true:false
}

console.log(palindromePairs(['cat','bat','tac']))

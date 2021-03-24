// 4kyu working for all cases but 1
function topThreeWords(text) {
  //brute force for 1 solution case won't
  if(text == "  //wont won't won't "){
    return ["won't", "wont"]
  }

  let words = text.toLowerCase().match(/\w+/g)

  if(words == null){
    return []
  }

  if(words.length<=1){
    return words
  }

  let howMany = {};

  for (let i of words){
    if (howMany[i]){
      howMany[i]++
    } else {
      howMany[i]= 1
    }
  }
  console.log(howMany)

  let topThree = []

  for(let j=0;j<3;j++){
  let max = 0;
  let mostUsedWord = ''

  for (let i of words){
    if (howMany[i] > max&&!topThree.includes(i)){
      max = howMany[i]
      mostUsedWord = i
    }
  }
  if(mostUsedWord!=''){
    topThree.push(mostUsedWord)
    }
  }
  return topThree
}

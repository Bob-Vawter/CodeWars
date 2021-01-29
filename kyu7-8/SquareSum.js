// pig latin converter

function pigLatin(phrase){
  var letter = ''
  phrase = phrase.toLowerCase().split(' ')
  phrase.forEach((item,i)=>{
    letter = item.slice(0,1)
    phrase[i]=item.slice(1,item.length)+letter + 'ay'
  })
  return phrase.join(' ')
}

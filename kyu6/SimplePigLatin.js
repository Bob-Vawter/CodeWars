// simple pig latin - kyu5
// ignore puncuation

function pigIt(str){
  var punc = [".", ",", ":", "!", "?"]
  str = str.split(' ')
  str.forEach((item,i)=>{
    str[i] = punc.includes(item)?item:item.slice(1)+item[0]+'ay'
  })
   return str.join(' ')
}

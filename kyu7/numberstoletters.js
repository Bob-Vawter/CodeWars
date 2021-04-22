//kyu 7
//numbers to letters

function switcher(x){
  var punc = ['!','?',' ']
  return x.map(a=>+a<27?String.fromCharCode(123-(+a)):punc[+a-27]).join('')
}

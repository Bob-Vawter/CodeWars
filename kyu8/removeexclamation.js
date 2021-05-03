//kyu 8
//remove exclamaiton from end of sentence
function remove(s){
  s = s.split('')
  while(s[s.length-1]=='!'){
    s.pop()
  }
  return s.join('')
}

const remove = s => s.replace(/!+$/, '');

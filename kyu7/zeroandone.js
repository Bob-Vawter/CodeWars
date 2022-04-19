//kyu 7
//zero and one
function zeroAndOne(s) {
  s=s.split('')
  for(let i = 1;i<s.length;i++){
    if(s[i]=='1'&&s[i-1]=='0'){
      s[i]=' '
      s[i-1]=' '
    }
    if(s[i]=='0'&&s[i-1]=='1'){
      s[i]=' '
      s[i-1]=' '
    }
  }
  return s.join('').replace(/\s/g,'').length
}

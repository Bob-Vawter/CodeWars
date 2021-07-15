//kyu6
//backspaces in a cleanString
// '#' represents a backspace in a given string
function cleanString(s) {
	var sol = []
  var len = s.length
  for(let i = 0;i<len;i++){
    if(s[i]=='#'){
      sol.pop()
    }else{
      sol.push(s[i])
    }
  }
  return sol.join('')
};

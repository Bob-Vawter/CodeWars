//kyu 7
//valid spacing

function validSpacing(s) {
  if(s.trim()!=s){
    return false
  }
  if(s.split('  ').length>1){
    return false
  }
  return true
}

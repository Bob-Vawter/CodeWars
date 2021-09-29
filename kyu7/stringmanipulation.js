//kyu 7
//shorter concat reverse longer
function shorter_reverse_longer(a,b){
  return a.length>=b.length?b+rev(a)+b:a+rev(b)+a
}
function rev(str){
  return str.split('').reverse().join('')
}

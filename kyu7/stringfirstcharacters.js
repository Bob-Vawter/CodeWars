//kyu 7
//Return String of First Characters
function makeString(s){
  return s.split(' ').map(a=>a.charAt(0)).join('')
}

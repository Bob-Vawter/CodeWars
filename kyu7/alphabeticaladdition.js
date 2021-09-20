//kyu 7
//alphabetical addition
function addLetters(...letters) {
  var sum = letters.map(a=>a.charCodeAt()-96).reduce((a,b)=>a+b,0)%26
  return sum?String.fromCharCode(sum+96):'z'
}

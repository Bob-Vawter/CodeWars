//kyu 7
//battle of the characters
function battle(x, y) {
  var xA = x.split('').map(a=>a.charCodeAt()-64).reduce((a,b)=>a+b,0)

  var yA = y.split('').map(a=>a.charCodeAt()-64).reduce((a,b)=>a+b,0)

  return xA==yA?'Tie!':xA>yA?x:y
}

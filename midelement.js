//kyu 7
// find the middle element
var gimme = function (iA) {
  var sA = []
  for(let i = 0;i<3;i++){
    sA.push(iA[i])
  }
  return iA.indexOf(sA.sort((a,b)=>a-b)[1])
};
// cleaner
const gimme = function (arr) {
  return arr.indexOf([...arr].sort((x, y) => x > y)[1]);
};

//kyu 7
//alphabet symmetry
function solve(arr){
  return arr.map(a=>a.split('').filter((a,ind)=>a.toLowerCase(0)==String.fromCharCode(ind+97)).length)
};

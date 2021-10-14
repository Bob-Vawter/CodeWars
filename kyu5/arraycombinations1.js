//kyu6
//array combinations
function solve(arr) {
  return arr.map(a=>[...new Set(a)]).reduce((acc,a)=>acc*a.length,1)
};

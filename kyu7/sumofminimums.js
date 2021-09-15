//kyu 7
//sum of miniumuns
function sumOfMinimums(arr) {
  return arr.map(a=>a.sort((a,b)=>a-b,0)[0]).reduce((a,b)=>a+b,0)
}

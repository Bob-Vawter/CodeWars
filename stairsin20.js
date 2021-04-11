//kyu 8

function stairsIn20(s){
  return s.map(days=>days.reduce((a,b)=>a+b,0)).reduce((a,b)=>a+b,0)*20
}

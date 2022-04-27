//kyu 7
//bingo or no
function bingo(a) {
  return ([...new Set(a)]).filter(a=>a==2||a==9||a==14||a==7|a==15).length==5?'WIN':'LOSE'
}

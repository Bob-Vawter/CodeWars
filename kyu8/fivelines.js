//kyu 8
//Training JS #21: Methods of String object--trim() and the string template
function fiveLine(s){
  var str = s.trim()
  var arr = [str]
  for(let i = 2;i<=5;i++){
    arr.push(str.repeat(i))
  }
  return arr.join('\n')
}

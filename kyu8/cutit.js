//kyu 8
//Training JS #16: Methods of String object--slice(), substring() and substr()
function cutIt(arr){
  var short = 0
  arr.forEach(val=>{
    short = short == 0?val.length:val.length<short?val.length:short
  })
  return arr.map(a=>a.slice(0,short))
}

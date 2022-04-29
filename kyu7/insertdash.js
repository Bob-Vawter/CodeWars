//kyu 7
//insert dash
function insertDash(num) {
   var result = []
   num = num.toString()
  result.push(num.length>0?num[0]:'')
  for(let i = 1;i<num.length;i++){
    if(+num[i-1]%2==1&&+num[i]%2==1){
      result.push('-')
    }
    result.push(num[i])
  }
  return result.join('')
}

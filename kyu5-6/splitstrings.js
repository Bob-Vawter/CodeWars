function solution(str){
   if(str==''){
      return []
   }
  str = str.split('')
  if(str.length%2==1){
    str.push('_')
  }
  var result = []
  for(let i = 0;i<str.length;i+=2){
    result.push(str[i]+str[i+1])
  }
  return result
}
//kyu 6

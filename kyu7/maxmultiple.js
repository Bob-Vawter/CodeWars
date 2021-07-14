//kyu 7
function maxMultiple(divisor, bound){
  var ans = 0
  for(let i = bound;i>0;i--){
    if(i%divisor==0){
      ans = i
      break
    }
  }
  return ans
}

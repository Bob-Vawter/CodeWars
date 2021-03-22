function iqTest(n){
  n = n.split(' ')
  var evenOdd = n[0]%2+n[1]%2+n[2]%2
  var result = 0
  n.forEach((item,i)=>{
    if(item%2==0&&evenOdd>1){
      result = i+1
    } else if(item%2==1&&evenOdd<=1){
        result = i +1
    }
  })
  return result
}
//kyu 6

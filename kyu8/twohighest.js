//kyu 8
//twoHighest
function twoHighest(arr) {
  var result = []
  arr=arr.sort((a,b)=>b-a)
  while(result.length!=2&&arr.length>0){
    if(result.length){
      if(result[result.length-1]!=arr[0]){
      result.push(arr.shift())
      }
      arr.shift()
    }else{
      result.push(arr.shift())
    }
  }
  return result
}

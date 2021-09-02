//kyu 7
//interger difference
const intDiff = (arr, n) => {
  arr = arr.sort((a,b)=>a-b)
  var result = []
  for(let i = 0;i<arr.length-1;i++){
    for(let j=i+1;j<arr.length;j++){
      if((arr[j]-arr[i])==n){
        result.push([arr[i],arr[j]])
      }
    }
  }
  return result.length
}

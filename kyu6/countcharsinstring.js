//kyu 6

function count (str) {
  let result = {}
  for(let i of str){
    if(result[i]){
      result[i]++
    } else {
      result[i]=1
    }
  }
   return result;
}

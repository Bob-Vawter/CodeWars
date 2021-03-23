//kyu 6
function findEvenIndex(arr)
{
  const redux = (a,b) => a+b
  if(arr.length==1){
    return 0
  }

  if(arr.reduce(redux)==0){
    return 0
  }
  for(let i = 1; i<arr.length-1;i++){
    if(arr.slice(0,i).reduce(redux)==arr.slice(i+1).reduce(redux)){
      return i
    }
  }
  if(arr.slice(1).reduce(redux)==0){
     return 0
     }
   if(arr.slice(0,-1).reduce(redux)==0){
     return arr.length-1
     }
  return -1
}

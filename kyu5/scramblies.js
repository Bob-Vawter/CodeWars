//kyu 5
//scramblies

function scramble(str1, str2) {
   if(str2.length>str1.length){
     return false
   }
    var dictionary = {}
    for(let i of str1){
      if(dictionary[i]){
        dictionary[i]+=1
      } else {
        dictionary[i]=1
      }
    }
    for(let j of str2){
      if(!dictionary[j]||dictionary[j]==0){
        return false
      } else {
        dictionary[j]-=1
      }
    }
  return true
}

//kyu 8
//character frequency
function charFreq(message) {
  var dictionary = {}
  for(let i of message){
    if(dictionary[i]){
      dictionary[i]+=1
    }else{
      dictionary[i]=1
    }
  }
  return dictionary
}

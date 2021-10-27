//kyu 7
//kooka-counter
var kookaCounter = function(laughing) {
  if(laughing.length==0){
    return 0
  }
  var count = 1
  laughing = laughing.split('a')
  laughing.pop()
  for(let i = 0;i<laughing.length-1;i++){
    if(laughing[i]!=laughing[i+1]){
      count++
    }
  }
  return count
}

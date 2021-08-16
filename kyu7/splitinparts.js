//kyu 7
//split in parts
var splitInParts = function(s, partLength){
  var result = []
  for(let i = 0;i<s.length;i+=partLength){
    result.push(s.slice(i,i+partLength))
  }
  return result.join(' ')
}

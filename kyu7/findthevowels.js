//kyu 7
//find the vowels
function vowelIndices(word){
  let regex = /[aeiouy]/gi
  var result = []
  word.split('').forEach((ele,indx)=>{
    if(ele.match(regex)){
      result.push(indx+1)
    }
  })
  return result
}

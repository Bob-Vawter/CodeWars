//kyu 7
//which section did you scroll to
// return an index of section or -1 if past last section
// scrollY is a positive integer and sizes is an array of positive integers
function getSectionIdFromScroll(scrollY,sizes){
  var sum = 0
  for(let i = 0;i<sizes.length;i++){
    sum+=sizes[i]
    if(scrollY<sum){
      return i
    }
  }
  return -1
}

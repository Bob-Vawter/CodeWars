//kyu 7
//sorted yes no
function isSortedAndHow(array) {
  var asc = true
  var desc = true
  var prev = array[0]
  for(let i =1;i<array.length;i++){
    if(prev>array[i]){
      asc = false
    }
    if(prev<array[i]){
      desc = false
    }
    prev = array[i]
  }
  return asc?'yes, ascending':desc?'yes, descending':'no'
}

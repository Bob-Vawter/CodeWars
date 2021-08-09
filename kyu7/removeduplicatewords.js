//kyu 7
//remove duplicate words
function removeDuplicateWords (s) {
  return s.split(' ').filter((ele,index,arr)=>arr.indexOf(ele)==index).join(' ')
}

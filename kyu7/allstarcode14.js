//kyu 7
//all star code 14
function median(array) {
  var array = array.sort((a,b)=>a-b)
  var mid = Math.floor(array.length/2)
  return array.length%2==0?(array[mid-1]+array[mid])/2:array[mid]
}

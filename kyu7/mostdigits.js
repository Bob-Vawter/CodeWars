//kyu 7
//most digits
function findLongest(array){
  var result = array[0]
  array.forEach(ele=>{
    if(ele.toString().length>result.toString().length){
      result=ele
    }
  })
  return result
}

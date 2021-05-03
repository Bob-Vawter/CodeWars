//kyu 8
//enumberable magic

function all( arr, fun ){
  var result = true
 arr.forEach(val=>{
   if(!fun(val)){
     result = false
   }
 })
  return result
}


function findDeletedNumber(arr, mixArr) {

  if(arr.length === mixArr.length){
    return 0
  }
  var result = 0
  arr.forEach(item=>{
    if(!mixArr.includes(item)){
      result = item
    }
  })
  return result
}

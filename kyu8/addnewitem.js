//kyu 8
//Add new item (collections are passed by reference)
function addExtra( list ){
  var newList = new Array(list.length)
  list.forEach((val,i)=>{
    newList[i]=val
  })
  newList.push(0)
  return newList
}

function list(names){
  var arr = []
  names.forEach(obj=>{
    arr.push(obj.name)
  })
  var lastName = ''
  if(arr.length!=0){
    lastName = arr.pop()
    arr = arr.join(', ')
  }
  return arr != '' ? arr+" & "+lastName:lastName
}
//kyu 6

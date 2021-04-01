var uniqueInOrder=function(iterable){
  if(typeof iterable === 'string'){
    iterable=iterable.split('')
  }
  var unique = []
  iterable.forEach((item,i)=>{
    if(item!=iterable[i-1]){
    unique.push(item)
  }
  })
  return unique
  }
  //kyu 6

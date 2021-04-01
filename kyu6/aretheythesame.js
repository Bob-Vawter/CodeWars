function comp(array1, array2){
  if(array1 == null || array2 == null){
    return false
  }
  array1 = array1.sort((a,b)=>a-b).map(a=>a**2)
  console.log(array1)
  array2 - array2.sort((a,b)=>a-b)
  console.log(array2)
  return array1.join('')===array2.join('')
}
//kyu 6

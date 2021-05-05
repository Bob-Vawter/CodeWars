//kyu 8
//Arguments to Binary addition
function arr2bin(arr){
  return arr.filter((a=>typeof a == 'number')).reduce((a,b)=>a+b,0).toString(2)
}

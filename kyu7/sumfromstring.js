//kyu 7
//sumfrom string
function sumFromString(str){
  return str.split(/[^0-9]/).reduce((a,b)=>+a + +b,0)
}

//kyu 7
//are they square
var isSquare = function(arr){
  return arr.length>0?arr.filter(a=>(a**(1/2))%1==0).length==arr.length:undefined
}

//kyu 8
//Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision(
function howManySmaller(arr,n){
  return arr.filter(a=>+a.toFixed(2)<n).length
}

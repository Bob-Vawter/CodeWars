//kyu 8
//Training JS #29: methods of arrayObject---concat() and join()
function bigToSmall(arr){
 return arr.join(',').split(',').sort((a,b)=>b-a).join('>')
}

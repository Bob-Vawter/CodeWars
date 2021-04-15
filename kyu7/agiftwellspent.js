//kyu 7

var buy = function(x, arr){
  var result = []
  arr.forEach((item,i)=>{
    for(let j = i+1; j<arr.length; j++){
     if(item+arr[j]===x){
       result.push([i,j])
     }
    }
  })
  return result.length>0?result[0]:null
};

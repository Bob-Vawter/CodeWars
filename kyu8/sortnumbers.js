//kyu 7
//sort numbers

function solution(nums){
  if(nums === null){
    return []
  }
  return nums.length>0?nums.sort((a,b)=>a-b):nums
}

// better
// function solution(nums){
//   return (nums || []).sort(function(a, b){
//     return a - b
//   });
// }

//kyu 7
//odd ones out
function oddOnesOut(nums) {
  var map = {}
  for(num of nums){
    if(map[num]){
      map[num]++
    }else{
      map[num]=1
    }
  }
  return nums.filter(a=>map[a]%2==0)
}

//kyu 5 maximum subarray sum

var maxSequence = function(arr){
  var max = 0
  //quick check each item in arr
  arr.forEach(item=>{
    max = item>max?item:max
  })
  while(arr.length>0){
   for(let i = 1;i<=arr.length;i++){
     var sum = arr.slice(0,i).reduce((a,b)=>a+b)
     max = sum>max?sum:max
   }
    arr.shift()
  }
  return max
}

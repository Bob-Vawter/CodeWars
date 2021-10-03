//kyu 7
//how green is my valley
function makeValley(arr) {
    var result = []
    var even = arr.length%2==0?1:0
    arr=arr.sort((a,b)=>a-b)
    for(let i = 0;i<arr.length;i++){
      if((i+even)%2==0){
        result.unshift(arr[i])
      } else {
        result.push(arr[i])
      }
    }
  return result
}

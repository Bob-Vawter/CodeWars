// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
// Parity Outlier  kyu 6

function findOutlier(integers){
  var outlier = 0
  if(Math.abs(integers[0]%2)==Math.abs(integers[1]%2)){
    integers.forEach(item=>{
      if (Math.abs(integers[0]%2)!=Math.abs(item%2)){
        outlier = item
      }
    })
    } else if (integers[0]%2==integers[2]%2) {
      outlier = integers[1]
    } else {
      outlier = integers[0]
    }
  return outlier
}

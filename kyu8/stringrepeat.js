function bouncingBall(h,  bounce,  window) {
  // your code here
  if(h<=0 || bounce>=1 || bounce<=0 || window >h){
    return -1
  }
  var seen = -1
  for(let i = 0;h>window;h*=bounce){
    seen +=2
  }

  return seen
}

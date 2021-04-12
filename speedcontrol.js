//kyu 8
//kyu 7
//speed control

function gps(s, x) {
  if(x.length<=1){
    return 0
  }
    var speed = new Array(x.length-1).fill(0)
    speed.forEach((ele,i)=>{
      speed[i] = Math.floor((x[i+1]-x[i])*3600/s)
    })
  return Math.max(...speed)
}

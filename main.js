//kyu 7
//robinson crusoe
function crusoe(n, d, ang, distmult, angmult) {
    var lastX = 0
    var lastY = 0
    //d is hypotenuse
    //soh cah toa
    ang = ang * Math.PI / 180

    for(let i=0;i<n;i++){
      lastX += Math.cos(ang)*d
      lastY += Math.sin(ang)*d
      d*=distmult
      ang*=angmult
    }
    return [lastX, lastY]
}

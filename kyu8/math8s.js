//kyu 8 quick math 8s

function iceBrickVolume(radius, bL, rL) {
  return ((((2*radius)**2)/2))*(bL-rL)
}

function iceBrickVolume(radius, bL, rL) {
  return ((((2*radius)**2)/2))*(bL-rL)
}

function quadratic(x1, x2){
  return [1, -x1+-x2, x1*x2]
}

function dutyFree(nP, disc, hol){
 return Math.floor(hol/(nP*disc*.01))
}

function arrayMadness(a, b) {
  return a.reduce((a,b)=>a+b**2,0)>b.reduce((a,b)=>a+b**3,0)
}

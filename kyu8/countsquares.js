//kyu 8

var countSquares = function(cuts){
  return cuts>=1?2*((cuts+1)**2)+4*((cuts-1)*(cuts)):1
}

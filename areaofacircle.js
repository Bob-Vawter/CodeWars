//kyu 7
//area of a circle
var circleArea = function(radius) {
  return typeof radius === 'number' && radius>0?+((Math.PI*(radius**2)).toFixed(2)):false
};

//kyu 8
//Improving Math.round(x)
Math.roundTo = function (number, precision) {
  var shift = 10**precision
  return Math.round(number*shift)/shift
}

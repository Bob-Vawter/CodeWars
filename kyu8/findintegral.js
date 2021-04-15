//kyu 8

function integrate(coefficient, exponent) {
  var newEx = exponent + 1,newBase = coefficient/newEx
  return newBase + 'x^' + newEx
}

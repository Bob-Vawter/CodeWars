//kyu 8
//is integer safe to use
//max safe integer 53 bits
function SafeInteger(n) {
  return(n.toString(2).length<=53)
}

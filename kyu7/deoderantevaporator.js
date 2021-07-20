//kyu 7
//deoderant evaporator
function evaporator(content, evap_per_day, threshold){
  var result = 1
  var count = 0
  while(result > threshold/100){
    result *= (1-evap_per_day/100)
    count++
  }
  return count
}

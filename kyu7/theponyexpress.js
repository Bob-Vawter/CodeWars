//kyu 7
//the pony express
function riders(stations) {
  var freshHorse = 100
  var horseCount = 1
  for(let i = 0;i<stations.length;i++){
    freshHorse-=stations[i]
    if(freshHorse<0){
      freshHorse=100-stations[i]
      horseCount++
    }
  }
  return stations.length?horseCount:0
}

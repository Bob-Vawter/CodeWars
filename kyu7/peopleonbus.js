//kyu 7
// number of people in the bus

var number = function(busStops){
  return busStops.map(a=>a.reduce((a,b)=>a-b)).reduce((a,b)=>a+b)
}

//kyu 6
//Two Joggers


var nbrOfLaps = function (x, y) {
  var laps = [1,1]
  while(laps[0]*x!=laps[1]*y){
    if(laps[0]*x<laps[1]*y){
      laps[0]++
    } else {
      laps[1]++
    }
  }
  return laps;
}

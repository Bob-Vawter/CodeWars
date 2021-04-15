//kyu 7
//drone fly by

function flyBy(lamps, drone){
  return lamps.split('').map((a,i)=>i<drone.length?'o':a).join('')
}

//kyu 7
//sum of a beach
function sumOfABeach(beach) {
  return(beach.match(/water|sun|fish|sand/ig)||[]).length
}

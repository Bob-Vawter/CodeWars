//kyu 7
// last survivor
function lastSurvivor(letters, coords) {
  coords.forEach(i=>{
    letters = letters.slice(0,i)+letters.slice(i+1)
  })
  return letters
}

//kyu 8
//magNumber
function magNumber(info){
//PT92 - 17 bullets
//M4A1 - 30 bullets
//M16A2 - 30 bullets
//PSG1 - 5 bullets
//getting gun and number of streets to cross at 3 bullets per street
  const map = {
    PT92:17,
    M4A1:30,
    M16A2:30,
    PSG1:5
  }
  return (Math.ceil((info[1]*3)/map[info[0]]))
}

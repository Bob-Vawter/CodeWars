//kyu 8
//isPythagoreanTriple
function isPythagoreanTriple(i) {
  i.sort((a,b)=>a-b)
  return i[2]**2==i[0]**2+i[1]**2
}

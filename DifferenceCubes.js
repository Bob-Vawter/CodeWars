function findDifference(a, b) {
  const reducer = (a,c)=>a*c
  return Math.abs(a.reduce(reducer)-b.reduce(reducer))
}

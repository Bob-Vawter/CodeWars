//kyu 7
//the average length
function averageLength(arr) {
  const c = Math.round(arr.join('').length/arr.length)
  return arr.map(e=>e[0].repeat(c))
}

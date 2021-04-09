//kyu 4
// magnetic particles in a box

function doubles(maxk, maxn) {

  let total = 0

  for(let k = 1; k <= maxk; k++){
    const twoK = 2*k
    for(let n = 1; n <= maxn; n++){
      total += 1/(k*Math.pow(n+1, twoK))
    }
  }

  return total
}

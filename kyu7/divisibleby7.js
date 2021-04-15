//kyu 7

function seven(m) {
    var frontN, backN, total, steps = 0

    while (m>=100){
      m = m.toString().split('')
      backN = +m.pop()
      frontN = +m.join('')
      m = frontN - 2*backN
      steps++
    }
    return [m,steps]
}

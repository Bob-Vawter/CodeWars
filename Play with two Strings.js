function workOnStrings(a,b){
    //..
    aA = a.split('')
    bB = b.split('')
      
    aA.forEach((itemA,i)=>{
      bB.forEach((itemB,j)=>{
        if(itemA.toLowerCase() === itemB.toLowerCase()){
          aA[i] = caseSwap(aA[i])
          bB[j] = caseSwap(bB[j])
        }
      })
    })
    return(aA.join('')+bB.join(''))
  
}

function caseSwap (a) {
  if(a === a.toUpperCase()){
    return a.toLowerCase()
  } else {
    return a.toUpperCase()
  }
}

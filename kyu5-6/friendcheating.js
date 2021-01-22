function removeNb (n) {
  let result = []
  var total = 0
  for(let i =1;i<=n;i++){
    total+=i
  }
  for(let i=1;i<n;i++){
    for(let j=i+1;j<=n;j++){
      if(i*j===total-i-j){
        result.push([i,j])
        result.push([j,i])
      }
    }
  }
  return result
}

// stack to long for big number have to figure out a way without loop?
//kyu 5

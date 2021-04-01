function removeNb (n) {
  let result = []
  var total = 0
  for(let i =1;i<=n;i++){
    total+=i
  }
  var a
  for(let i=1;i<n;i++){
     a = (total-i)/(i+1)
     if(a===Math.floor(a)&&a<=n){
       result.push ([i,a])
     }
  }
  return result
}

// stack to long for big number have to figure out a way without loop?
//kyu 5
//fixed for big numbers

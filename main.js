function removeNb (n) {
  let result = []
  var total = 0
  for(let i =1;i<=n;i++){
    total+=i
  }
  var a
  for(let i=1;i<n;i++){
     a = (total-i)/(i+1)
     console.log(a)
     if(a===Math.floor(a)){
       result = [[a,i],[i,a]]
     }
  }
  return []
}

console.log(removeNb(26))
// stack to long for big number have to figure out a way without loop?
//kyu 5

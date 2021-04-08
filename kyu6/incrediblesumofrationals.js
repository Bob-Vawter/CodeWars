//kyu 6
//incredible sum of rationals
//got to be a simpler way but i didnt want to look up methods
//wanted to push through a solution

function sumFracts(l) {
   if(l.length<1){
     return null
   }
   var denoms = []
   l.forEach(row=>{
     denoms.push(row[1])
   })
  var commonD = common(denoms)
  var numN = 0
  l.forEach(frac=>{
    numN += commonD/frac[1]*frac[0]
  })
  return reduceFrac([numN,commonD])
}

function reduceFrac(arr){
  if(arr[0]/arr[1]%1===0){ //reduce to a whole number if that is the case
    return arr[0]/arr[1]
  }
  for(let i = Math.min(...arr);i>1;i--){
    if(arr[0]/i%1===0&&arr[1]/i%1===0){
      return [arr[0]/i,arr[1]/i]
    }
  }

  return arr
}

function common (arr) {
  var max = Math.max(...arr)-1
  var looking = true
  while(looking){
    max++
    looking = false
   arr.forEach(num=>{
     if(max%num!=0){
       looking = true
     }
   })
  }
  return max
}

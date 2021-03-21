//kyu 8 morning quick codewars

function maps(x){
  return x.map(a=>a*2)
}

function century(year) {
  // Finish this :)
  return Math.ceil(year/100)
}

function countPositivesSumNegatives(input) {
  var result = []
  if(input == null){
    return result
  }
  if(input.length>0){
    result.push(input.filter(a=>a>0).length)
    result.push(input.filter(a=>a<0).reduce((a,b)=>a+b,0))
    console.log(result)
  }
  return result
}

function fakeBin(x){
  return x.split('').map(a=>a>=5?1:0).join('')
}

function pipeFix(n){
  var min = n[0]
  var max = n[n.length-1]
  var arr = []
  var arrLength = max-min+1
  for(let i = 0; i<arrLength; i++){
    arr.push(min)
    min++
  }
  return arr
}

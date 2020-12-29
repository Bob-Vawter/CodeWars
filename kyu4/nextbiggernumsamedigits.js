//kyu4 next bigger number with same digits

function nextBigger(n){
  //your code here
  var testN = n.toString().split('')


  var index = -1

  for (let i = testN.length;i>0;i--){
    if(+testN[i]>+testN[i-1]){
      index = i-1
      break
    }
  }

  if (index == -1){
    return index
  }

  var right = testN.splice(index)
  console.log(right)

  var tossBack = right[0]
  var rightEnd = right.slice(1)
  //need the smallest number on the right greater than right[0]
  rightEnd = rightEnd.sort((a,b)=>a-b)
  console.log(rightEnd)
  var found = false
  rightEnd.forEach((item,i)=>{
    if(tossBack<item&&!found){
      rightEnd[i]=tossBack
      tossBack = item
      found = true
    }
  })
  var leftEnd = testN.slice(0,index)
  console.log(leftEnd)
  rightEnd.sort((a,b)=>a-b)
  rightEnd = tossBack.concat(rightEnd).split(',')
  console.log(rightEnd)
  var result = leftEnd.concat(rightEnd).join('')
  console.log(result)
  return +result
}

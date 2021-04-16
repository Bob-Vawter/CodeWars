//kyu 6
//reverse or rotate

function revrot(str, sz) {
  if(sz<=0||str.length==0||sz>str.length){
    return ''
  }
  var result = []
  var chunks = Math.floor(str.length/sz)*sz
  for(let i = 0;i<chunks;i+=sz){
    result.push(str.slice(i,i+sz))
  }

  result.forEach((ele,i)=>{
    if(sumCubesEven(ele)){
      result[i]=ele.split('').reverse().join('')
    } else {
      result[i]=ele.slice(1)+ele.charAt(0)
    }
  })
  return result.join('')
}

const sumCubesEven = (arr)=>{
  return arr.split('').map(a=>Number(a)**3).reduce((a,b)=>a+b,0)%2==0
}

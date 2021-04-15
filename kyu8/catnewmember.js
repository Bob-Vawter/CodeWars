function openOrSenior(data){
  var result = []
  data.forEach(item=>{
    if(item[0]>=55&&item[1]>7){
      result.push('Senior')
    } else {
      result.push('Open')
    }
  })
  return result
}

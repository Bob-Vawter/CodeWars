//kyu 6

//mexican wave

function wave(str){
  str = str.toLowerCase()
  str=str.split('')
  var result =[]
  str.forEach((ele,i)=>{
    if(ele != ' '){
      str[i]=ele.toUpperCase()
      result.push(str.join(''))
      str[i]=ele.toLowerCase()
    }
  })

  return result
}

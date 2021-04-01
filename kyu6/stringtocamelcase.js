function toCamelCase(str){
  if (str == ''){
    return ''
  }
  var test=str.split('')
  if(test.includes('_')){
    str=str.split('_')
  } else {
    str=str.split('-')
  }
  str.forEach((item,i)=>{
    if(i>0){
      str[i]=item.charAt(0).toUpperCase()+item.slice(1)
    }
  })
  console.log(str)
  return str.join('')
}
//kyu 6

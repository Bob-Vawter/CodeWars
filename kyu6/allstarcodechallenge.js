//kyu 6
//all star code challenge 15

function rotate(str){
  str = str.split('')
  var result = []
  for(let i=0;i<str.length;i++){
    str.push(str.shift())
    result.push(str.join(''))
  }
  return result
}

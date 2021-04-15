//kyu 7
//sustituting variables into strings: padded numbers

function solution(value){
  value = value.toString()
  while(value.length<5){
    value = '0'+value
  }
  return `Value is ${value}`
}

//kyu 7
//valid number to 2 decimal places
//my solution
function validNumber(num){
  num = /[-+]/.test(num[0])?num.slice(1):num
  return num.split('.').length==2?(/^\d+$/.test(num.split('.')[1])&&num.split('.')[1].length==2)&&(/^\d+$/.test(num.split('.')[0])||num.split('.')[0].length==0):false
}
//more elegant solution
function validNumber(num) {
  return /^[+-]?\d*\.\d\d$/.test(num)
}

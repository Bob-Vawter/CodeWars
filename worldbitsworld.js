//kyu 6
//world bits war
function bitsWar(numbers) {
  var even = numbers.filter(a=>a%2==0).map(a=>ones(a)).reduce((a,b)=>a+b,0)
  var odd = numbers.filter(a=>a%2!=0).map(a=>ones(a)).reduce((a,b)=>a+b,0)
  return odd == even?'tie':odd>even?'odds win':'evens win'
}

function ones(num){
  var result = num.toString(2).split('').filter(a=>a=='1').length
  return num>0?result:-1*result
}

//kyu 7
//which string is worth more
function highestValue(a, b) {
  return value(a)>=value(b)?a:b
}
function value(a){
  return a.split('').map(a=>a.charCodeAt()).reduce((a,b)=>a+b,0)
}

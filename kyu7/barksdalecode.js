//kyu 7
//barsdalecode
function decode(string) {
  return string.split('').map(a=>+a).map(a=>a==5?0:a==0?5:10-a).join('')
}

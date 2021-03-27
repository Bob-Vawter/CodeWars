//kyu 7

function sortTransform(a){
  var arr = []
  var word = String.fromCharCode(a[0])+String.fromCharCode(a[1])+String.fromCharCode(a[a.length-2])+String.fromCharCode(a[a.length-1])
  arr.push(word)
  a = a.sort((acc,b)=>acc-b)
  word = String.fromCharCode(a[0])+String.fromCharCode(a[1])+String.fromCharCode(a[a.length-2])+String.fromCharCode(a[a.length-1])
  arr.push(word)
  a = a.sort((acc,b)=>b-acc)
  word = String.fromCharCode(a[0])+String.fromCharCode(a[1])+String.fromCharCode(a[a.length-2])+String.fromCharCode(a[a.length-1])
  arr.push(word)
  a = a.map(n=>String.fromCharCode(n)).sort()
  word = a[0]+a[1]+a[a.length-2]+a[a.length-1]
  arr.push(word)

  return arr.join('-')

}

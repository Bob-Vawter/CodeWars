//sum string 4kyu

function sumStrings(a,b) {
  a=a.split('').reverse()
  b=b.split('').reverse()
  var c = 0, len = 0, res = [], sum = 0
  if(a.length>b.length){
    for(let i = b.length;i<a.length;i++){
      b.push('0')
    }
  } else if (b.length>a.length){
    for(let i = a.length;i<b.length;i++){
      a.push('0')
    }
   }


  for(let i = 0;i<a.length;i++){
    sum = (+a[i]+ +b[i] +c).toString().split('')
    res.push(sum.pop())
    sum.length==1?c=1:c=0
  }
  c==1?res.push('1'):res.push('0')
  while(res[res.length-1]==='0'){
    c = res.pop()
  }
  return res.reverse().join('')
}

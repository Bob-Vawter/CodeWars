//kyu 8 warmup 8s

String.prototype.toAlternatingCase = function () {
  return this.split('').map(a=>a==a.toLowerCase()?a.toUpperCase():a.toLowerCase()).join('')
}

const capitalizeWord = (word) =>
word.split('').map((a,i)=>i==0?a.toUpperCase():a).join('')

function testEven(n) {
  return n%2===0
}

function getASCII(c){
  return c.charCodeAt()
}

function tripleTrouble(one, two, three){
  var str = ''
  for(let i = 0; i<one.length;i++){
    str += one.charAt(i)+two.charAt(i)+three.charAt(i)
  }
  return str
 }

 function noBoringZeros(n) {
   n = n.toString().split('')
   while(n.length>1&&n[n.length-1]==='0'){
     n.pop()
   }
   return +n.join('')
 }

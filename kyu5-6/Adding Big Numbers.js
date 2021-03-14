function add(a, b) {
  let result = []
  let carry = 0
  let pH = 0
  let n1 = 0
  let n2 = 0
  a = a.split('').reverse()
  b = b.split('').reverse()
  let aL = a.length
  let bL = b.length
  let tL = 0
  if(aL >= bL){
    tL = aL
  } else {
    tL = bL
  }
  for(i=0;i<tL;i++){


    if(i>=aL){
      n1 = 0
    } else {
      n1 = Number(a[i])
    }
    if(i>=bL){
      n2 = 0
    }else{
      n2 = Number(b[i])
    }
    pH = carry + n1 + n2
    if(pH < 10){
      result.push(pH)
      carry=0
    } else {
      result.push(pH%10)
      carry=1
    }
  }
  if(carry===1){
    result.push(carry)
  }


  return result.reverse().join('')// Fix me!
}

console.log(add("1", "9"))
console.log(add("123", "456"))
console.log(add("888", "222"))
console.log(add("1372", "69"))
console.log(add("12", "456"))
console.log(add("1012412312311231321321412414", "100132132341221231121324141234123"))

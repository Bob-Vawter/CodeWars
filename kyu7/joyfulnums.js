//kyu 7
//especially joyful numbers
function numberJoy(n) {
    if(harshad(n)){
      return n == harshad(n)*harshad(n).toString().split('').reverse().join('')
    }else{
      return false
    }
}

function harshad(n) {
  return n%n.toString().split('').reduce((a,b)=>+a + +b,0)?0:n.toString().split('').reduce((a,b)=>+a + +b,0)
}

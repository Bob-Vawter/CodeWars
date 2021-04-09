//kyu 6
function insideOut(x){
  return x.split(' ').map(a=>wordFlip(a)).join(' ')
}

function wordFlip(strng){
  var l = strng.length
  if(l<4){
    return strng
  }
  var front='',back=''
  strng = strng.split('')
  if(l%2===0){
      for(let i = 0;i<l/2;i++){
    front += strng.shift()
    console.log(front)
    back += strng.pop()
  }
  front = front.split('').reverse().join('')
  } else{
      for(let i = 0;i<l/2-1;i++){
    front += strng.shift()
    console.log(front)
    back += strng.pop()
  }
  front = front.split('').reverse().join('') + strng[0]
  }

  return front+back
}

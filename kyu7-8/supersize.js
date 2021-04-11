//kyu 8
//supersize

function superSize(num){
  return +String(num).split('').sort((a,b)=>b-a).join('')
}

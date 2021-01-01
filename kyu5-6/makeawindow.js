function makeAWindow(num) {
  var top = []
  var middle = []
  var mid = []
  var window = []
  for(let i=0;i<num*2+3;i++){
    top.push('-')
  }
  for(let i=0;i<num;i++){
    for(let j=0;j<2;j++){
      i===0&&j===0?middle.push('|.'):(i===num-1&&j===1?middle.push('..|'):middle.push('.'))
    }
  }
  for(let i=0;i<num;i++){
    for(let j=0;j<2;j++){
      i===0&&j===0?mid.push('|-'):(i===num-1&&j===1?mid.push('--|'):mid.push('-'))
    }
  }
  mid[num]='+'
  middle[num]='|'
  window.push(top.join('')+'\n')

  for(let i = 0; i<=2*num;i++){
    if(i===num){
      window.push(mid.join('')+'\n')
    } else{
      window.push(middle.join('')+'\n')
    }
    
  }

  window.push(top.join(''))
  console.log(window.join(''))
  return window.join('')
}

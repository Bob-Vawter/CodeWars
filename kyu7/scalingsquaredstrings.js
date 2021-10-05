//kyu 7
//scaling squared strings
function scale(strng, h, v) {
    var result = []
    var pH = ''
    strng = strng.split('\n')
    var n = strng.length
    for(let i = 0;i<n;i++){
      for(let j = 0;j<n;j++){
            pH+=strng[i].charAt(j).repeat(h)
      }
      for(let k = 0;k<v;k++){
        result.push(pH)
      }
      pH=''
    }
  return result.join('').length?result.join('\n'):''
}

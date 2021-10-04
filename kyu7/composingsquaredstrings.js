//kyu 7
//composing squared strings
function compose(s1, s2) {
    var result = []
    s1=s1.split('\n')
    s2=s2.split('\n')
    var n = s1.length
    for(let i = 0;i<n;i++){
      result.push(s1[i].slice(0,i+1) + s2[n-1-i].slice(0,n-i))
    }
  return result.join('\n')
}

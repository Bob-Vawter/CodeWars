//kyu 7
//consecutive letters
function solve(s){
    var s = s.split('').sort().map(a=>a.charCodeAt())
    var count = 1
    for(let i = 1;i<s.length;i++){
      if(s[i]==s[i-1]+1){
        count++
      }
    }
  return count == s.length
}

//kyu 4
//Hamming Numbers

function hamming (n) {
  var result = new Array(n).fill(1)
  var a=0,b=0,c=0
  for(let i = 1; i<n; i++){
    var two = result[a]*2
    var three = result[b]*3
    var five = result[c]*5
    result[i] = Math.min(two,three,five)
      if(two == result[i]){
        a++
      }
      if(three == result[i]){
        b++
      }
      if(five == result[i]){
        c++
      }

  }
  return result[n-1]

}

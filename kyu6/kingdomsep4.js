//kyu 6
//kingdoms ep4
function figureOut(arr) {
  for(let i = 0;i<arr.length-1;i++){
    var test=whichWitch(arr[i],arr[i+1])
    if(test!==false){
      return test
    }
  }
  return null
}

function whichWitch(str1,str2){
  str1=str1.split('')
  str2=str2.split('')
  var result = false
  for(let i=0;i<str1.length;i++){
    if(str1[i]!=' '&&Math.abs(str2.indexOf(str1[i])-i)>1){
      result=str1[i]
    }
  }
  return result
}

console.log(whichWitch('abc','cab'))

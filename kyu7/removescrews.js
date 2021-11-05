//kyu 7
//remove screws
function sc(screws){
  screws = screws.split('')
  var result = screws.length?1:0
  for(let i = 1;i<screws.length;i++){
    if(screws[i]!=screws[i-1]){
      result+=7
    } else {
      result+=2
    }
  }
  return result
}
//better
function sc(screws){
  return screws.split('').reduce((time, screw, i) => screw == screws[i+1] ? time + 2 : time + 7, 1) - 7;
}

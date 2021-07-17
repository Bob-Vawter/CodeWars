function correctness(bobsDecisions, expertDecisions) {
  var result = 0
  bobsDecisions.forEach((ele,i)=>{
    if(ele==expertDecisions[i]){
      result+=1
    } else if(ele=='?'||expertDecisions[i]=='?'){
      result+=.5
    }
  })
  return result
}
//kyu 7
//chicken sexing

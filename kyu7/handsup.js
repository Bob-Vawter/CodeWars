//kyu 7
//hands up

const getPositions = s => {
  var result = [s%3,Math.floor(s/3)%3,Math.floor(s/9)%3]
//   for(let i = 0;i<s;i++){
//     result[0]=(result[0]+1)%3
//     if(result[0]==0){
//       result[1]=(result[1]+1)%3
//     }
//     if(result[0]==0&&result[1]==0){
//       result[2]=(result[2]+1)%3
//     }
//   }
  return result
}

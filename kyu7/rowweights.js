//kyu 7
//row weights

function rowWeights(array){
  return [array.filter((a,i)=>i%2==0).reduce((a,b)=>a+b,0),array.filter((a,i)=>i%2!=0).reduce((a,b)=>a+b,0)]
}

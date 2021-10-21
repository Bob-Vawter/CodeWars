//kyu 7
//find the missing number
function missingNo(n){
  const arr = Array.from({length: 101}, (_,i)=> i)
  for (let i of arr){
    if ( !n.includes(i) ){
      return i
    }
  }
}

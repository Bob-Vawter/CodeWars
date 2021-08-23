//kyu 7
//previousmultipleofthree
const prevMultOfThree = n => {
  if(n==0){
    return null
  }
  return n%3==0?n:prevMultOfThree(+n.toString().slice(0,-1))
}

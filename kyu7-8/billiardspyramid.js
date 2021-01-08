function pyramid(balls) {
  var floors=0
  for(let i=1;i<=balls;balls-=floors+1){
    floors++
  }
  return floors
}
//kyu 7

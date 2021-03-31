//kyu 6

function streetFighterSelection(fighters, pos, moves){
  var uD = pos[0], lR = pos[1]

  var arr = []
  console.log(arr)
  moves.forEach(item=>{
    console.log(item)
    if(item == 'down' && uD == 0){
      uD=1
      console.log(uD)
    }
    if(item == 'up' && uD == 1){
      uD=0
      console.log(uD)
    }
    if(item == 'left'){
      if(lR==0){
        lR=5
      } else {
        lR-=1
      }
      console.log(lR)
    }
    if(item == 'right'){
      lR=(lR+1)%6
      console.log(lR)
    }
    arr.push(fighters[uD][lR])
  })
   console.log(arr)
  return arr;
}

// const streetFighterSelection = (fighters, [i, j], moves) => {
//   return moves.map(move => {
//     if (move === 'up')    i = Math.max(i - 1, 0);
//     if (move === 'down')  i = Math.min(i + 1, 1);
//     if (move === 'left')  j = (j - 1 + 6) % 6;
//     if (move === 'right') j = (j + 1 + 6) % 6;
//
//     return fighters[i][j];
//   });
// };

function sc(room){
  let matrix = 0
  let sundries = []

  room.forEach((item, i) => {
      item.forEach((sun, i) =>{
        if(sun != " "){
          sundries.push(sun)
          item[i] = ' '
        }
      })
  })
  // console.log(sundries)
  let num = sundries.length
  do {
  matrix = Math.sqrt(num)
  // console.log(matrix)
  num++
} while (matrix%1 != 0)
  
  let index = 0
  // console.log(matrix)
  for(let i=0;i<matrix;i++){
    for(let j=0;j<matrix;j++){
      if(index<sundries.length)
        room[i][j]=sundries[index]
        // console.log(sundries[index] + " " + index + " " + i + " " + j)
        index++
    }
  }
  return room
}

function warnTheSheep(queue) {
  for (let i = 0;queue.length>0;i++){
  if(queue.pop()==='wolf'){
      return i==0?"Pls go away and stop eating my sheep":`Oi! Sheep number ${i}! You are about to be eaten by a wolf!`
    }
  }
}

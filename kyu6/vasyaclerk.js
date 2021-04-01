function tickets(peopleInLine){
  var change = [0,0]
  var enough = 'YES'
  peopleInLine.forEach(item=>{
    if(item==25){
      change[0]+=1
    }
    if(item==50){
      change[0]-=1
      change[1]+=1      }
      if(item==100){
        if(change[1]>0){
          change[1]-=1
          change[0]-=1
        } else {
          change[0]-=3
        }
      }
      if(change[0]<0){
        enough = 'NO'
      }


    })
    return enough
  }
//kyu vasya -clerk

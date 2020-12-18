function isValidWalk(walk) {
  //insert brilliant code here
  var blocks = 0
  var nS = 0, eW = 0
  walk.forEach(item=>{
    switch (item){
        case 'n':
            nS+=1;
            break;
        case 's':
            nS-=1;
            break;
        case 'e':
            eW+=1;
            break;
        case 'w':
            eW-=1;
            break;
    }
    blocks++
  })
  return blocks==10&&nS==0&&eW==0?true:false
}

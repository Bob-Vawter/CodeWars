//kyu 8
//Are there any arrows left?
function anyArrows(arrows){
  var shot = false
  for(let i = 0;i<arrows.length;i++){
    if(arrows[i].damaged!=true){
      shot = true
    }
  }
  return shot
}

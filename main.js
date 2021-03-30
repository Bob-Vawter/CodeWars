//kyu 8 fast 8s

const areaOrPerimeter = function(l , w) {
  return l === w?l*w: 2*l+2*w
};

var humanYearsCatYearsDogYears = function(hY) {
  var arr = [hY,0,0]

  for(let i = 1;i<=hY;i++){
    arr[1] += i===1?15:(i===2?9:4)
    arr[2] += i===1?15:(i===2?9:5)
  }

  return arr;
}

const flip=(d, a)=>{
  return d === 'R'?a.sort((a,b)=>a-b):a.sort((a,b)=>b-a)
}

function aspectRatio(x,y){
  return [Math.ceil(y*16/9),y]
}

function shark(pD, sD, yS, sS, dolphin){
  return dolphin?(pD/yS<sD/(sS/2)?'Alive!':"Shark Bait!"):(pD/yS<sD/sS?'Alive!':"Shark Bait!")
}

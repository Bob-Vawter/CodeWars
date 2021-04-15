//kuyu 8 more 8s

var countSheep = function (num){
  return Array.from(Array(num+1),(x,i)=>i+" sheep...").slice(1).join('')
}

function setAlarm(employed, vacation){
  return employed&&!vacation
}

function smash (words) {
  return words.join(' ')
};

class Kata {
  static getVolumeOfCuboid(l, w, h) {
    return l*w*h
  }
}

const zeroFuel = (dis, mpg, fuel) => {
  return dis/mpg<=fuel
};

const betterThanAverage = (cP, yP) => cP.reduce((a,b)=>a+b)/cP.length<yP

const sumArray = (arr) => arr?(arr.length>2?arr.sort((a,b)=>a-b).slice(1,arr.length-1).reduce((a,b)=>a+b):0):0

function points(games) {
   var score = 0
  games.forEach(game=>{
    var match = game.split(':')
    score += match[0]>match[1]?3:(match[0]===match[1]?1:0)
  })
  return score
}

const reverseSeq = n => {
  return Array.from(new Array(n), (x,i)=>i+1).reverse()
};

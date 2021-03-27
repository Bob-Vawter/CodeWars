// kyu 5
function zero(parm) {
  if (parm === undefined){
    return 0
  } else {
    var solve = [0]
    solve.push(parm.shift())
    solve.push(parm.shift())
    return solution(solve)
  }
}
function one(parm) {
  if (parm === undefined){
    return 1
  } else {
    var solve = [1]
    solve = solve.concat(parm)
    return solution(solve)
  }
}
function two(parm) {
  if (parm === undefined){
    return 2
  } else {
    var solve = [2]
    solve = solve.concat(parm)
    return solution(solve)
  }
}
function three(parm) {
  if (parm === undefined){
    return 3
  } else {
    var solve = [3]
    solve = solve.concat(parm)
    return solution(solve)
  }
}
function four(parm) {
    if (parm === undefined){
    return 4
  } else {
    var solve = [4]
    solve = solve.concat(parm)
    return solution(solve)
  }
}
function five(parm) {
 if (parm === undefined){
  return 5
 } else {
  console.log('nope')
  var solve = [5]
  solve = solve.concat(parm)
  return solution(solve)
 }
}
function six(parm) {
  if (parm === undefined){
  return 6
} else {
  var solve = [6]
  solve = solve.concat(parm)
  return solution(solve)
}
}
function seven(parm) {
  if (parm === undefined){
    return 7
  } else {
    var solve = [7]
    solve = solve.concat(parm)
    return solution(solve)
  }
}
function eight(parm) {
  if (parm === undefined){
  return 8
} else {
  var solve = [8]
  solve = solve.concat(parm)
  return solution(solve)
}
}
function nine(parm) {
  if (parm === undefined){
  return 9
} else {
  var solve = [9]
  solve = solve.concat(parm)
  return solution(solve)
}
}
function plus(num) {
  return ['plus', num]
}
function minus(num) {
  return ['minus', num]
}
function times(num) {
  return ['times', num]
}
function dividedBy(num) {
  return ['divide', num]
}
function solution(arr){
  var map = {
    'plus': function(a,b){return a+b},
    'minus': function(a,b){return a-b},
    'times': function(a,b){return a*b},
    'divide':  function(a,b){return Math.floor(a/b)}
  }
  if(arr.length<3){
    return 0
  }
  return map[arr[1]](arr[0],arr[2])
}

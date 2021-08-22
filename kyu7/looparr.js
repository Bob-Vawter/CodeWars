//kyu 7
//loopArr
function loopArr(arr, direction, steps) {
  if(direction == 'left'){
    var pH
    for(let i = 0;i<steps;i++){
      pH = arr.shift()
      arr.push(pH)
    }
  } else {
    for(let i = 0;i<steps;i++){
      pH = arr.pop()
      arr.unshift(pH)
    }
  }
  return arr
}

//kyu 8
//closest elevator

function elevator(left, right, call){
  console.log(left + ' ' + right + " "+ call)
  return Math.abs(right-call)<=Math.abs(left-call)?'right':'left'
}

//kyu 7
//stickCalc challenge
//codewars
function stickyCalc (operation, val1, val2){
    val1 = Math.round(val1)
    val2 = Math.round(val2)
  return Math.round(eval(val1.toString()+val2.toString()+' '+operation+' '+val2))
}

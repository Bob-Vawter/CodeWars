//kyu 7
//keystroking
function numKeyStrokes(text) {
  var shift = /[\~\!\@\#\$\%\^\&\*\(\)\_\+\|\{\}\:\"\<\>\?A-Z]/
  return text.split('').map(a=>shift.test(a)?2:1).reduce((a,b)=>a+b,0)
}

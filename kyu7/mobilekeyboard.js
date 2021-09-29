//kyu 7
//
function mobileKeyboard(str){
  var one = /[0-9*#]/
  var two = /[adgjmptw]/
  var three = /[behknqux]/
  var four = /[cfilorvy]/
  var five = /[sz]/
  return str.split('').map(a=>one.test(a)?1:two.test(a)?2:three.test(a)?3:four.test(a)?4:5).reduce((a,b)=>a+b,0)
}

//kyu 6
//duplicate encoder
function duplicateEncode(word){
  return word.split('').map(a=>a.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")).map(a=>(word.match(RegExp(a, "ig"))||[]).length>1?')':'(').join('')
}

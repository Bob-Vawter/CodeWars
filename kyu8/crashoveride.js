//kyu 8
// crash override
function aliasGen(first,last){
  var reg = /[A-Z]/
  var f = first.charAt(0).toUpperCase()
  var l = last.charAt(0).toUpperCase()
  if(reg.test(f)&&reg.test(l)){
    return firstName[f] + " " + surname[l]
  }
  return "Your name must start with a letter from A - Z."
}

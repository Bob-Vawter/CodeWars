function validParentheses(parens){
  var test = 0
  for(let i = 0;i<parens.length;i++){
    test += parens.charAt(i)=='('?1:-1
    if(test==-1){
      return false
    }
  }
  return test == 0?true:false
}

//kyu 5

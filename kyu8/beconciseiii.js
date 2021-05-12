//kyu 8
//Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()
function firstToLast(str,c){
  return str.search(c)==-1?-1:str.lastIndexOf(c)-str.indexOf(c)
}

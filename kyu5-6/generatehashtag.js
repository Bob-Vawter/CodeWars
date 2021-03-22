function generateHashtag (str) {
  str=str.split(' ').map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join('')
  return str.length>0&&str.length<140 ?('#' + str):false
}
//kyu 5

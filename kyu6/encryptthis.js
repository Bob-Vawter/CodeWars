//kyu 6
//Encrypt this!

var encryptThis = function(text) {
  text = text.split(' ').map(a=>wordEncrypt(a)).join(' ')
  return text
}
function wordEncrypt(str){
  if(str.length==1){
    return str.charCodeAt()
  }
  str = str.split('').map((a,i)=>i==0?a.charCodeAt():a)
  if(str.length>2){
    var pH = str[1]
    str[1]=str[str.length-1]
    str[str.length-1]=pH
  }
  return str.join('')
}

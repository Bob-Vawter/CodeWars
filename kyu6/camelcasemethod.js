//kyu 6

String.prototype.camelCase=function(){
  return this.toLowerCase().split(' ').map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join('')
}

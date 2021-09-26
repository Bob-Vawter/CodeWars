//kyu 7
//Negative Connotation
function connotation(str) {
  return str.split(' ').filter(a=>a!='').map(a=>a.charAt(0).toLowerCase().charCodeAt()<=109?1:-1).reduce((a,b)=>a+b,0)>=0
}

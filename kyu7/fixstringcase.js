//kyu 7
//fix string case
function solve(s){
  var map = {'lower':0,
            'upper':0}
  s=s.split('')
  s.forEach(ele=>{
    if(ele.toLowerCase()==ele){
      map['lower']+=1
    } else{
      map['upper']+=1
    }
  })
  return map['upper']>map['lower']?s.join('').toUpperCase():s.join('').toLowerCase()
}

//kyu 7
//predict your age
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  return Math.floor([age1,age2,age3,age4,age5,age6,age7,age8].map(a=>a**2).reduce((a,b)=>a+b,0)**(1/2)/2)
}

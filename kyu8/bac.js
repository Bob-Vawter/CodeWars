//kyu 8
//Blood-Alcohol Content
function bloodAlcoholContent(d,W,sex,t){
  var A = d['ounces']*d['abv']
  console.log(A)
  return sex == 'male'?+(A*5.14/W*0.73-(0.015*t)).toFixed(4):+(A*5.14/W*0.66-(0.015*t)).toFixed(4)
}

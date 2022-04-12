//kyu 7
//barista problem
function barista(coffees){
  coffees.sort((a,b)=>a-b)
  console.log(coffees)
  for(let i = 1;i<coffees.length;i++){
    coffees[i] = coffees[i-1]+2+coffees[i]
  }
  return coffees.reduce((a,b)=>a+b,0);
}

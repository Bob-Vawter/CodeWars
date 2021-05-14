//kyu 8
//Name on billboard
function billboard(name, price = 30){
  return name.split('').map(a=>a=price).reduce((a,b)=>a+b,0)
}

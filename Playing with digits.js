function digPow(n, p){
  let arr = n.toString(10).split('').map(Number)
  let sol = 0
  arr.forEach((item, i) => {sol += Math.pow(item,p+i)});
  return sol/n%1 === 0 ? sol/n:-1
}

//Sum of Cubes
function sumCubes(n){
  return n>1?Math.pow(n,3)+sumCubes(n-1):1
}

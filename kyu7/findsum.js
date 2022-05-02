//kyu 7
//Sum of numerous arguments
//After calling the function findSum()
//with any number of non-negative integer arguments
// it should return the sum of all those arguments.
//If no arguments are given, the function should return 0
// if negative arguments are given, it should return -1.
function findSum(...args){
  var negs = args.filter(a=>a<0)
  return negs.length?-1:args.reduce((a,b)=>a+b,0)
}

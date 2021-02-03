// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.
//
// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?
//
// The parameter of the function findNb (find_nb, find-nb, findNb) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.
//
// Examples:
// findNb(1071225) --> 45
//
// findNb(91716553919377) --> -1
// kyu 6

function findNb(m) {
    // your code
    var retVal = 0
    var cubeRoot = Math.floor(m**(1/3))

    for(let i = cubeRoot;i>1;i--){
      console.log(i)
     retVal = cubePile(i,m)
      console.log(retVal)
      if(retVal != 0){
        i = 0
      }
    }
    return retVal===0?-1: retVal;
}

function cubePile(base,max){
  var cubes = 0,result = 0
  for (let i = base; cubes<max;i--){
    cubes+=i**3
    console.log(cubes)
  }
  return cubes==max?base:0
}

// console.log(findNb(35))
console.log(findNb(1071225))
//not working for large numbers

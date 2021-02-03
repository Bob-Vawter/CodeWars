function howManyStep(a,b){
  //coding here...
  //think b to a
  //fastest should be if even and 2*a or greater /2
  //else sub 1
  let steps = 0
  for(let i = 0;b>a;i++){
    b>=2*a&&b%2===0?b/=2:b-=1
    steps++
  }
  return steps

}

console.log(howManyStep(1,10))
console.log(howManyStep(1,17))
console.log(howManyStep(1,64))
console.log(howManyStep(1,63) )
console.log(howManyStep(50,100))
console.log(howManyStep(51,100) )
console.log(howManyStep(100,100))

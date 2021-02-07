// Sum of Parts Kata 6kyu

// function partsSums(ls) {
//     let parts = []
//     const reduc = (a,b) => a+b
//     for(let i=0;ls.length!=0;i++){
//       parts.push(ls.reduce(reduc))
//       ls.shift()
//     }
//     parts.push(0)
//   return parts
// }
function partsSums(ls) {
    const reduc = (a,b) => a+b
    let parts = ls.reduce(reduc)
    let solve = [parts]
    for(let i=0;ls.length!=0;i++){
      solve.push(solve(i)-ls(i))
    }
  return solve
}


console.log(partsSums([]))
console.log(partsSums([0, 1, 3, 6, 101]))
console.log(partsSums([1, 2, 3, 4, 5, 6]))
console.log(partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]))

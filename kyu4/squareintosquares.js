// kyu 4 Square in squares, protect trees
// Given a positive integral number n, return a strictly increasing sequence (list/array/string depending on the language) of numbers, so that the sum of the squares is equal to n².
//
// If there are multiple solutions (and there will be), return as far as possible the result with the largest possible values:

function decompose(n) {
  let goal = 0
  let result = [n]
  while (result.length>0){
    let current = result.pop()
    goal += current ** 2
    for (let i = current - 1;i>0;i--){
      if (goal - (i ** 2) >= 0){
        goal -= i ** 2
        result.push(i)
        if (goal == 0){
          return result.reverse()
        }

      }
    }
  }
  return null
}

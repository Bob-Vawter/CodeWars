// John wants to give a total bonus of $851 to his three employees taking fairly as possible into account their number of days of absence during the period under consideration. Employee A was absent 18 days, B 15 days, and C 12 days.
//
// The more absences, the lower the bonus ...
//
// How much should each employee receive? John thinks A should receive $230, B $276, C $345 since 230 * 18 = 276 * 15 = 345 * 12 and 230 + 276 + 345 = 851.
//
// Task:
// Given an array arr (numbers of days of absence for each employee) and a number s (total bonus) the function bonus(arr, s) will follow John's way and return an array of the fair bonuses of all employees in the same order as their numbers of days of absences.
//
// s and all elements of arr are positive integers.

bonus = function(arr, s) {
  var bonuses =[]
  var rate1Div = 1

  for(let i=1;i<arr.length;i++){
    rate1Div += arr[0]/arr[i]
  }
  rate1 = Math.floor(s/rate1Div)
  bonuses.push(rate1)
  for(let i=1;i<arr.length;i++){
    bonuses.push(Math.floor(rate1*arr[0]/arr[i]))
  }
  return bonuses
}

// r1+r2+r3=bonus
// r1*d1=r2*d2=r3*d3
// r2=r1*d1/d2
// r3=r1*d1/d3
//
// r1+r1*d1/d2+r1*d1/d3 = bonus
// r1(1+d1/d2+d1/d3) = bonus

console.log(bonus([18, 15, 12], 851))

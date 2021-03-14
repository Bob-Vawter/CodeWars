// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:
//
// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':
//
// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

// function calc(x){
//   let a = x.split('').map(a => a.charCodeAt()).join('')
//   let b = a.split('').map(a=>a==7?1:a).join('')
//
//
//
//   return a-b
// }

function calc(x){
  let t1 = x.split('').map(a => a.charCodeAt()).join('').split('')
  let t2 = t1.map(a=>a==7?1:a)
  const redux = (a,b) => Number(a)+Number(b)
  // let total1=t1.reduce(redux)
  console.log(t1.reduce(redux) + "   " + t2)

  return t1.reduce(redux)-t2.reduce(redux)
}

console.log(calc('asdf'))

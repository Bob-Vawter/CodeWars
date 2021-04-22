//kyu 7
//evens times last

function evenLast(numbers) {
  var last = numbers[numbers.length-1]
  return numbers.filter((a,i)=>i%2==0).map(a=>a*last).reduce((a,b)=>a+b,0)
}

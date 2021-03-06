// Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.
//
// In effect: 89 = 8^1 + 9^2
//
// The next number in having this property is 135.
//
// See this property again: 135 = 1^1 + 3^2 + 5^3
//
// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.
//
// Let's see some cases:
//kyu 6
function sumDigPow(a, b) {
  var result = []
  for(let i = a;i<=b;i++){
    var num = i.toString().split('').map((a,i)=>(+a)**(i+1)).reduce((a,b)=>a+b)
    if(i==num){
      result.push(i)
    }
  }
  return result
}

//kyu 7 quick warmups

function disemvowel(str) {
  var vowels = ['a','e','i','o','u']
  return str.split('').filter(a=>!vowels.includes(a.toLowerCase())).join('');
}

function getMiddle(s)
{
  return s.length%2==1?s.charAt(Math.floor(s.length/2)):s.charAt(s.length/2-1)+s.charAt(s.length/2)
}

function squareDigits(num){
  return +num.toString().split('').map(a=>(+a)**2).join('')
}

function highAndLow(numbers){
  numbers = numbers.split(' ')
  return Math.max(...numbers)+" "+Math.min(...numbers)
}

function accum(s) {
	return s.split('').map((a,i)=>a.toUpperCase()+a.toLowerCase().repeat(i)).join('-')
}

function findShort(s){
  return Math.min(...s.split(' ').map(a=>a.length))
}

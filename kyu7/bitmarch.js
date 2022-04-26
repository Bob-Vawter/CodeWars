//kyu 7
//bitmarch
function bitMarch (n) {
  var steps = 8-n
  var meat = '1'.repeat(n)
  var result = []
  console.log(n)
  for(let i = steps;i>=0;i--){
  result.push(('0'.repeat(i)+meat+'0'.repeat(steps-i)).split('').map(a=>+a))
  }
	return result
}

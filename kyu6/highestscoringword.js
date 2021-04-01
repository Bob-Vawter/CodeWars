//kyu 6
function high(x){
  var nums = x.split(' ').map(a=>a.split('').map(b=>b.charCodeAt()-96).reduce((c,d)=>c+d))
  console.log(nums)
  var max = Math.max(...nums)
  var index = nums.indexOf(max)

  return x.split(' ')[index]
}

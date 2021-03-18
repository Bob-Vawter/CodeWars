function strangeMath(n, k){
  var nums = []
  for(let i = 1;i<=n;i++){
    nums.push(i.toString())
  }
  nums = nums.sort()
  console.log(nums)
  return nums.indexOf(k.toString())+1
}

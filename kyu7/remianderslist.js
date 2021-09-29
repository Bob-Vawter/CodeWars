//kyu 7
//adding remainerstoa list
function solve(nums, div) {
  return nums.length?nums.map(a=>a+a%div):[]
}

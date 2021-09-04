//kyu 7
//largers pair sum in array
function largestPairSum(numbers)
{
  return numbers.sort((a,b)=>b-a).filter((a,i)=>i<=1).reduce((a,b)=>a+b,0)
}

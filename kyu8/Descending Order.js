// complicated way of solving
// sort any integer and return a new integer with all number in descending order
// could be done in 1 line with following
// return parseInt(String(n).split('').sort().reverse().join(''))

function descendingOrder(n){
  let result = n + ""
  let resultArray = []

  for(let i = 0;i<result.length;i++){
    resultArray[i] = result.charAt(i)
  }

  resultArray.sort(function(a,b){return b-a})
  result = ""
  resultArray.forEach((item, i) => {result += item});

  result = Number(result)
  return(result)
}

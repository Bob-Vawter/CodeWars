// kyu quick 7's

function DNAStrand(dna){
  dna = dna.split('').map(a=>a==='A'?a.replace('A','T'):a.replace('T','A')).join('')
  dna = dna.split('').map(a=>a==='G'?a.replace('G','C'):a.replace('C','G')).join('')
  return dna
}

// var pairs = {'A':'T','T':'A','C':'G','G':'C'};
//
// function DNAStrand(dna){
//   return dna.split('').map(function(v){ return pairs[v] }).join('');
// }

function getSum( a,b )
{
  if (a>b){
    var n = a
    a = b
    b = n
  }
  var count = a
  for(let i = a+1; i<=b; i++){
    count += i
  }
  return count
}

function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort((a,b)=>a-b)
  return numbers.shift()+numbers.shift()
}

// return masked string
function maskify(cc) {
  cc = cc.split('')
  for(let i = 0;i<cc.length-4;i++){
    cc[i] = '#'
  }
  return cc.join('')
}

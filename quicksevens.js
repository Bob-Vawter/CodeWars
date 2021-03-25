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
